import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, botcheck } = body;

    // Honeypot spam koruması (botlar gizli alanı doldurursa reddet)
    if (botcheck) {
      return NextResponse.json(
        { success: false, message: "Spam algılandı." },
        { status: 400 }
      );
    }

    // Doğrulama kontrolleri
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Lütfen adınızı ve soyadınızı giriniz." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      return NextResponse.json(
        { success: false, message: "Lütfen geçerli bir e-posta adresi giriniz." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "Mesajınız en az 5 karakter olmalıdır." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey.trim() === "") {
      console.warn(
        "[Contact API] WEB3FORMS_ACCESS_KEY tanımlanmamış. .env.local dosyasına anahtarı ekleyin."
      );
      return NextResponse.json(
        {
          success: false,
          code: "MISSING_KEY",
          message:
            "E-posta servisi henüz aktif edilmedi. Lütfen .env.local dosyasına WEB3FORMS_ACCESS_KEY anahtarınızı ekleyiniz.",
        },
        { status: 503 }
      );
    }

    // Web3Forms API çağrısı
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey.trim(),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        subject: `Portfolyo İletişim: ${name.trim()}`,
        from_name: `${name.trim()} (Portfolyo İletişim)`,
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return NextResponse.json({
        success: true,
        message: "Mesajınız başarıyla iletildi! En kısa sürede dönüş yapacağım.",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message:
            data.message ||
            "Mesaj iletilemedi, lütfen daha sonra tekrar deneyiniz.",
        },
        { status: response.status || 500 }
      );
    }
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Sunucu bağlantısında bir sorun oluştu. Lütfen doğrudan e-posta ile iletişime geçiniz.",
      },
      { status: 500 }
    );
  }
}
