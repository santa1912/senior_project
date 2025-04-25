import Airtable from 'airtable'
import { ref, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'

// Types for our KPI data
interface KPIRound {
  id: string
  name: string
  startDate: string
  endDate: string
  categories: {
    name: string
    value: number
    color: string
    percent: number
  }[]
}

export function useAirtableKpi() {
  const kpiRounds = ref<KPIRound[]>([])
  const selectedRound = ref<KPIRound | null>(null)
  const isLoading = ref(true)
  const error = ref<string | null>(null)

  // Initialize Airtable
  const config = useRuntimeConfig()
  console.log('Airtable config:', config.public.airtableApiKey, config.public.airtableBaseId)
  const base = new Airtable({
    apiKey: config.public.airtableApiKey
  }).base(config.public.airtableBaseId || '')

  // Fetch KPI data from Airtable
  const fetchKpiData = async () => {
    try {
      isLoading.value = true
      console.log('Fetching KPI data from Airtable table "KPI Rounds"')
      const records = await base('tbl5VwzIkafUfKvRA').select({ view: 'viw2yYAkP2kb1d3NN' }).all()
      
      kpiRounds.value = records.map(record => {
        const fields = record.fields
        return {
          id: record.id,
          name: fields['Round Name'] as string,
          startDate: fields['Start Date'] as string,
          endDate: fields['End Date'] as string,
          categories: [
            {
              name: 'Teaching',
              value: fields['Teaching'] as number,
              color: '#2563eb',
              percent: fields['Teaching'] as number
            },
            {
              name: 'Research',
              value: fields['Research'] as number,
              color: '#eab308',
              percent: fields['Research'] as number
            },
            {
              name: 'Academic Service',
              value: fields['Academic Service'] as number,
              color: '#14b8a6',
              percent: fields['Academic Service'] as number
            },
            {
              name: 'Administration',
              value: fields['Administration'] as number,
              color: '#9333ea',
              percent: fields['Administration'] as number
            },
            {
              name: 'Arts and Culture',
              value: fields['Arts and Culture'] as number,
              color: '#ec4899',
              percent: fields['Arts and Culture'] as number
            }
          ]
        }
      })

      // Set the first round as selected by default
      if (kpiRounds.value.length > 0) {
        selectedRound.value = kpiRounds.value[0]
      }

      isLoading.value = false
    } catch (e) {
      console.error('Error fetching KPI data:', e)
      error.value = e instanceof Error ? e.message : JSON.stringify(e)
      isLoading.value = false
    }
  }

  // Select a specific round
  const selectRound = (roundId: string) => {
    const round = kpiRounds.value.find(r => r.id === roundId)
    if (round) {
      selectedRound.value = round
    }
  }

  // Fetch data when the component mounts
  onMounted(fetchKpiData)

  return {
    kpiRounds,
    selectedRound,
    isLoading,
    error,
    selectRound,
    refreshData: fetchKpiData
  }
}
