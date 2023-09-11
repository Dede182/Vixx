
import * as z from 'zod'

const LoginFormSchema = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(5).max(24),
    confirmPassword: z.string().min(5).max(24)
}).refine((values) => {
    return values.confirmPassword === values.password
}, {
    message: "Confirm password must be the same as password",
    path: ['confirmPassword']
})

export type SignUpValues = z.infer<typeof LoginFormSchema>