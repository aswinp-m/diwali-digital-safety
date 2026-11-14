const topics = [
  {
    title: "Impersonation calls",
    summary: "Spot fake officers, arrest threats, and demands for payment.",
    icon: "phone",
    color: "peach",
    html: `
      <p>A caller in uniform claims that cops from a different country found a parcel in your name. They order you to stay on video under “digital arrest” and send a deposit. <strong>End the call. You can hang up.</strong></p>
      <h3>Listen for the pressure</h3>
      <ul>
        <li>A supposed FBI agent wants you to transfer your savings for an investigation. An “IRS officer” demands gift cards to avoid arrest. Someone claiming to be from immigration threatens deportation unless you pay today. These are impersonation scams.</li>
        <li>Caller ID, a badge photo, and someone knowing your passport details can all look convincing. Keep your money, documents, and screen private.</li>
        <li>Call a trusted relative. To check a real concern, look up the agency on its official website yourself. If you sent money, contact your bank immediately and ask whether it can stop or reverse the payment.</li>
      </ul>
      <div class="source-links">
        <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2020570">Digital-arrest advisory</a>
        <a href="https://www.irs.gov/help/how-to-know-its-the-irs">Verify IRS contact</a>
        <a href="https://consumer.ftc.gov/consumer-alerts/2022/07/scammers-impersonate-us-immigration-officers">FTC immigration scam guide</a>
        <a href="https://www.ic3.gov/">Report online crime to the FBI</a>
      </div>`
  },
  {
    title: "Bank & WhatsApp fraud",
    summary: "Keep login codes private and double-check urgent family requests.",
    icon: "chat",
    color: "lilac",
    html: `
      <p>Your “bank” calls about a suspicious transfer. A six-digit code arrives, and the caller says reading it aloud will cancel the payment. <strong>Keep the code private and hang up.</strong></p>
      <ul>
        <li>A one-time password (OTP) can authorize a login or transaction. Only enter it in the official app or site for an action you started. Call the number on your bank card to check your account.</li>
        <li>A WhatsApp message from “your grandchild” asks for urgent money or a code to rejoin the family group. Call your grandchild on a number you already had. Even a familiar account can be taken over.</li>
        <li>If you shared a bank code, call the bank’s fraud team now. If someone used your WhatsApp account to ask for money, warn your contacts using another channel.</li>
      </ul>
      <div class="source-links">
        <a href="https://consumer.ftc.gov/consumer-alerts/2024/03/whats-verification-code-why-would-someone-ask-me-it">FTC verification-code guide</a>
        <a href="https://about.fb.com/news/2025/08/new-whatsapp-tools-tips-beat-messaging-scams/">WhatsApp scam tips</a>
      </div>`
  },
  {
    title: "Credit freezes",
    summary: "Freeze your U.S. credit for free at all three bureaus.",
    icon: "lock",
    color: "lime",
    html: `
      <p>A credit freeze restricts access to your credit report, making it harder for someone to open a new account in your name. <strong>Placing and lifting a freeze are free and leave your credit score unchanged.</strong></p>
      <h3>Place a security freeze with each bureau</h3>
      <div class="source-links">
        <a href="https://www.equifax.com/personal/credit-report-services/credit-freeze/">Freeze at Equifax</a>
        <a href="https://www.experian.com/help/credit-freeze/">Freeze at Experian</a>
        <a href="https://www.transunion.com/credit-freeze">Freeze at TransUnion</a>
      </div>
      <ul>
        <li>Choose the free <strong>security freeze</strong> at each site. You can skip paid subscriptions. Each adult places a freeze on their own file.</li>
        <li>Applying for a credit card or an apartment? Ask which bureau the lender or landlord checks, then schedule a temporary lift with that bureau.</li>
        <li>Continue reviewing current bank and card accounts for unfamiliar charges. If someone has used your identity, get a personal recovery plan.</li>
      </ul>
      <div class="source-links">
        <a href="https://consumer.ftc.gov/articles/credit-freezes-and-fraud-alerts">FTC credit-freeze guide</a>
        <a href="https://www.identitytheft.gov/">Get an identity recovery plan</a>
      </div>`
  },
  {
    title: "MFA & passkeys",
    summary: "Give your email, bank, and other accounts an extra layer of protection.",
    icon: "key",
    color: "butter",
    html: `
      <p>Think about the email account you use to reset other passwords. Open its security settings and turn on <strong>multifactor authentication (MFA)</strong>. It asks for another way to prove it’s you, such as an authenticator app on your phone.</p>
      <ul>
        <li>When offered, set up a <strong>passkey</strong> on your own device. You sign in with your device PIN, face, or fingerprint. The passkey is tied to the real site, which helps protect you from fake sign-in pages.</li>
        <li>If your account offers an authenticator app, follow its setup instructions. If text codes are the only option, enable them. Decline any sign-in request you didn’t start.</li>
        <li>Save recovery codes somewhere private that you can reach if your phone goes missing. Repeat for your bank and other important accounts.</li>
      </ul>
      <div class="source-links">
        <a href="https://www.nist.gov/cybersecurity-and-privacy/how-do-i-create-good-password">NIST guide to MFA and passkeys</a>
      </div>`
  },
  {
    title: "Phishing & QR codes",
    summary: "Check delivery alerts, unpaid toll texts, and unexpected QR codes.",
    icon: "qr",
    color: "teal",
    html: `
      <p>A text says your Diwali parcel needs a small redelivery fee. Another warns of an overdue toll. <strong>Leave the link alone.</strong> A familiar logo and a tiny charge can disguise a request for your card details.</p>
      <ul>
        <li>Check the order in the shop or carrier app you already use. For a toll, go directly to the toll agency’s official website to check the charge.</li>
        <li>A QR code can hide the destination. If a parking meter or donation poster has a sticker covering its code, use the posted payment instructions or ask the organizer in person.</li>
        <li>If you already entered a password on a suspicious site, change it in the real app or website. If you entered card details, call the number on your card.</li>
      </ul>
      <div class="source-links">
        <a href="https://consumer.ftc.gov/articles/how-recognize-and-report-spam-text-messages">FTC delivery and text scams</a>
        <a href="https://consumer.ftc.gov/consumer-alerts/2025/01/got-text-about-unpaid-tolls-its-probably-scam">FTC toll scam guide</a>
        <a href="https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information">FTC QR-code advice</a>
      </div>`
  },
  {
    title: "Family safety habits",
    summary: "Make a callback plan and practice four everyday safety habits.",
    icon: "shield",
    color: "rose",
    html: `
      <p>Before the next family emergency, agree on a callback plan. If someone asks for money, call their saved number or check with a second relative. Practice it with someone at the table.</p>
      <h3>Try CISA’s four everyday habits</h3>
      <ul>
        <li><strong>Recognize and report phishing.</strong> Use the report option when a message pushes you to click or pay.</li>
        <li><strong>Use strong, unique passwords.</strong> Let a password manager create and remember a different one for each account.</li>
        <li><strong>Turn on MFA.</strong> Start with the email account you use to reset passwords.</li>
        <li><strong>Update software.</strong> Enable automatic updates on family phones, tablets, and computers.</li>
      </ul>
      <p>If someone shares that they paid a scammer, thank them for telling you. Help them call their bank using a trusted number, save messages and receipts, and make a report.</p>
      <div class="source-links">
        <a href="https://www.cisa.gov/sites/default/files/2024-09/Secure-Our-World-4-Easy-Ways-Stay-Safe-Online-Tip-Sheet.pdf">CISA’s four safety habits (PDF)</a>
        <a href="https://reportfraud.ftc.gov/">Report a scam to the FTC</a>
      </div>`
  }
];
