import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'Missing fields' }), {
                status: 400,
            })
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        })

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.MAIL_USER,
            subject: `Portfolio Contact — ${name}`,
            text: message,
        }

        await transporter.sendMail(mailOptions)

        return new Response(JSON.stringify({ success: true }), { status: 200 })
    } catch (err) {
        console.error('Contact API error:', err)
        return new Response(JSON.stringify({ error: 'Failed to send' }), {
            status: 500,
        })
    }
}
