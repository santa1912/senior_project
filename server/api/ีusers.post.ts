export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // ตัวอย่างบันทึกลง DB (เปลี่ยนเป็น MySQL หรือ Firestore ก็ได้)
  const newUser = {
    id: Date.now(),
    name: body.name,
    role: body.role
  }

  // ส่งกลับ response
  return {
    status: 'success',
    data: newUser
  }
})