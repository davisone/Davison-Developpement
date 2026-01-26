import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend('re_d8RFo6iA_K5L2Vmi5p1KzyeSLnvMAfzdd')

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation basique
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Mapping des sujets
    const subjectLabels: Record<string, string> = {
      'creation-site': 'Création de site internet',
      'refonte-site': 'Refonte de site existant',
      'application-web': 'Application web',
      'application-mobile': 'Application mobile',
      'seo': 'Référencement SEO',
      'autre': 'Autre',
    }

    const subjectLabel = subjectLabels[subject] || subject

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'DVS Web <contact@dvs-web.fr>',
      to: ['contact@dvs-web.fr'],
      replyTo: email,
      subject: `[DVS Web] ${subjectLabel} - ${name}`,
      html: `
        <h2>Nouveau message depuis le site DVS Web</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subjectLabel}</p>
        <hr />
        <h3>Message :</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    if (error) {
      console.error('Erreur Resend:', error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('Erreur serveur:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
