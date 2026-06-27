// All site translations — English and Hindi
const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      products: 'Financial Products',
      howItWorks: 'How It Works',
      about: 'About Us',
      bookCall: 'Book a Call',
    },
    // Hero
    hero: {
      badge: "India's Trusted Financial Guidance Platform",
      title: 'Smart Financial Decisions, Made Simple',
      subtitle: 'Unbiased guidance on loans, balance transfers, and financial products — tailored for government employees and working professionals.',
      cta1: 'Explore Products',
      cta2: 'Book a Free Call',
      trust1: '100% Unbiased',
      trust2: 'RBI Compliant Info',
      trust3: 'Free Guidance',
    },
    // Products
    products: {
      title: 'Financial Products We Guide You On',
      learnMore: 'Learn More →',
      items: [
        { name: 'Home Loan', desc: 'Finance your dream home with the best rates' },
        { name: 'Personal Loan', desc: 'Quick funds for personal needs without collateral' },
        { name: 'Balance Transfer', desc: 'Move your existing loan to a lower interest rate' },
        { name: 'Loan Top-Up', desc: 'Get additional funds on your existing loan' },
        { name: 'Vehicle Loan', desc: 'Two-wheeler or car loans at competitive rates' },
        { name: 'Education Loan', desc: 'Fund higher education in India or abroad' },
        { name: 'Business Loan', desc: 'Capital to grow your business or startup' },
        { name: 'Loan Against Property', desc: 'Unlock the value of your property' },
      ],
    },
    // How It Works
    howItWorks: {
      title: 'How Loan Veda Helps You',
      steps: [
        { title: 'Book Free Consultation', desc: 'Choose a convenient 30-min time slot' },
        { title: 'Financial Profile Analysis', desc: 'We analyse your income, CIBIL, existing loans & eligibility' },
        { title: 'Compare Multiple Banks', desc: 'We compare top banks to find the best offers for you' },
        { title: 'Best Loan Strategy', desc: 'Get the best interest rate, terms & EMI structure' },
        { title: 'Dedicated Advisor Assigned', desc: 'Your personal advisor till your loan closure & beyond' },
        { title: 'Support Till Loan Closure', desc: 'End-to-end support until your loan is successfully closed' },
      ],
    },
    // Why Choose Us
    whyChoose: {
      title: 'We Are With You, Till Your Loan Is Closed',
      cards: [
        {
          title: 'Dedicated Loan Advisor',
          desc: 'A personal advisor is assigned to you who stays with you till loan closure.',
        },
        {
          title: '100% Unbiased Guidance',
          desc: "We don't push any specific bank. We find the best option for you.",
        },
        {
          title: 'Hidden Charges Detection',
          desc: 'Processing fee, legal charges, insurance — all clearly explained to you.',
        },
        {
          title: 'Loan Negotiation Support',
          desc: 'We help you negotiate better interest rates and terms with banks.',
        },
        {
          title: 'EMI Optimization',
          desc: 'We find the best EMI and tenure balance to reduce your monthly burden.',
        },
        {
          title: 'Lifetime Relationship',
          desc: 'Even after your loan is disbursed, we stay with you — lifetime guidance.',
        },
      ],
      advisors: {
        sectionLabel: 'Meet Your Advisors',
        title: 'Experts Who Are With You',
        subtitle: 'Our experienced loan advisors understand your needs and guide you at every step.',
        cta: 'Book a Free Call',
        list: [
          {
            name: 'Gaurav Tripathi',
            role: 'Home Loan Specialist',
            experience: '7+ Years Experience',
            assisted: '₹100+ Cr Loans Assisted',
          },
          {
            name: 'Neha Sharma',
            role: 'Personal Loan Expert',
            experience: '6+ Years Experience',
            assisted: '₹80+ Cr Loans Assisted',
          },
          {
            name: 'Rohit Verma',
            role: 'Loan Advisor',
            experience: '5+ Years Experience',
            assisted: '₹70+ Cr Loans Assisted',
          },
          {
            name: 'Pooja Mehta',
            role: 'Balance Transfer Expert',
            experience: '6+ Years Experience',
            assisted: '₹80+ Cr Loans Assisted',
          },
        ],
      },
    },
    // Booking
    booking: {
      title: 'Book Your Free Financial Guidance Call',
      subtitle: 'Available Monday to Saturday, 9:00 AM – 6:00 PM',
      form: {
        name: 'Full Name',
        phone: 'Contact Number',
        city: 'City',
        interest: 'Interested In',
        message: 'Message',
        submit: 'Confirm Booking',
        note: "✓ We'll confirm via WhatsApp/SMS",
        selectOption: 'Select an option',
        options: ['Home Loan', 'Personal Loan', 'Balance Transfer', 'Loan Top-Up', 'Vehicle Loan', 'Education Loan', 'Business Loan', 'Other'],
      },
      errors: {
        name: 'Name is required',
        phone: 'Contact number is required',
        city: 'City is required',
        date: 'Please select a date',
        time: 'Please select a time slot',
      },
      success: {
        title: 'Booking Confirmed!',
        message: "We'll call you on",
        at: 'at',
      },
      referrer: {
        title: 'Referrer Name',
        placeholder: 'Enter referrer name',
        submit: 'Submit',
        skip: 'Submit without Referrer',
      },
    },
    // Testimonials
    testimonials: {
      title: 'What Our Clients Say',
      submitReview: 'Submit a Review',
      reviewPopup: {
        title: 'Share Your Experience',
        namePlaceholder: 'Your Name',
        rolePlaceholder: 'Your Designation & City',
        reviewPlaceholder: 'Write your review...',
        ratingLabel: 'Your Rating',
        submit: 'Submit Review',
        success: 'Thank you for your review!',
      },
      items: [
        { initials: 'RK', name: 'Rajesh Kumar', role: 'Central Govt. Employee, Delhi', quote: 'Loan Veda saved me weeks of research. Got the best home loan rate in just one call!' },
        { initials: 'PS', name: 'Priya Sharma', role: 'Bank Manager, Mumbai', quote: 'Finally, unbiased advice! They explained balance transfer in simple terms.' },
        { initials: 'AV', name: 'Amit Verma', role: 'Teacher, Lucknow', quote: 'Booked a call, got all my questions answered in 30 mins. Highly recommend!' },
      ],
    },
    // Footer
    footer: {
      tagline: 'Apno jaisi guidance',
      about: 'Helping government employees and working professionals make smarter financial decisions with unbiased guidance.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      phone: '+91 7619888990',
      email: 'support@loanveda.in',
      hours: 'Mon–Sat, 10AM–6PM',
      copyright: '© 2024 Loan Veda. All rights reserved.',
      disclaimer: 'Disclaimer: We provide financial awareness and guidance only, not regulated financial advice.',
      legal: {
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy',
        disclaimer: 'Disclaimer',
        complaints: 'Complaints',
      },
      termsAndConditions: {
        title: 'Terms and Conditions',
        content: `Last Updated:16 April 2026

Welcome to Loan Veda. By accessing or using this application, you agree to the following Terms and Conditions. Please read them carefully.

1. Nature of the Platform
Loan Veda is a financial awareness and loan education platform.

The App does NOT provide loans, credit, or any financial products.
The App is NOT a bank, NBFC, broker, or financial institution.
The App does NOT process, approve, or disburse any loan applications.
The App provides only general educational content about loan concepts, eligibility, and financial terms.
All information provided is for educational purposes only.

2. No Loan Processing
No loan application is submitted, processed, or forwarded through this platform.
Users who wish to apply for a loan must independently approach their preferred bank or financial institution.
Loan Veda has no role in any lending decision, approval, disbursement, or rejection.

3. No Financial Advice
The App provides general educational information only.
It does NOT provide personalised financial, legal, investment, or tax advice.
Users must independently verify all information and consult a certified financial advisor or their bank before making any borrowing decision.

4. No Guarantee
Loan Veda does not guarantee:
Loan approval or eligibility
Any specific interest rate or EMI amount
Processing timelines or outcomes
All figures shown in the App are indicative and for educational understanding only.

5. User Responsibility
By using the App, you agree to:
Use the platform for personal, non-commercial, educational purposes only
Not misuse or attempt to manipulate the platform
Take full responsibility for your own financial decisions
Loan Veda is not responsible for any financial loss, loan rejection, EMI default, or credit impact arising from decisions made by the user.

6. Community & Awareness Program
Users may voluntarily participate in spreading financial awareness by inviting others to the platform.
Promotional rewards or vouchers may be offered as appreciation for active participation.
These rewards are:
Entirely optional and not guaranteed
Not connected to any loan, financial transaction, or lending activity
Subject to change or withdrawal at any time
Governed by applicable third-party voucher terms

7. Data Collection & Privacy
Loan Veda collects only minimum information necessary to personalise the in-app educational experience.
We do NOT:
Access SMS, contacts, call logs, media files, or banking credentials
Share or sell user data to any third party for commercial or marketing purposes
Process user data for any loan application or financial transaction
For full details, refer to our Privacy Policy.

8. Intellectual Property
All content, branding, design, and technology on Loan Veda are protected intellectual property.
Users are granted a limited, personal, non-transferable licence for personal use only.

9. Limitation of Liability
Services are provided on an as-is basis.
Loan Veda shall not be liable for any indirect, consequential, or financial damages.
Maximum liability, if any, shall not exceed the amount paid by the user (generally zero).

10. Changes to Terms
Loan Veda may update these Terms at any time without prior notice.
Continued use of the App after any update constitutes acceptance of the revised Terms.

11. Governing Law
These Terms are governed by the laws of India.
Any disputes shall be subject to the jurisdiction of courts in India.

12. Contact
For any queries or concerns:
Email: support@loanveda.in

13. Acceptance
By installing, accessing, or using the App, you confirm that you have read, understood, and agreed to these Terms and Conditions.`
      },
      privacyPolicy: {
        title: 'Privacy Policy',
        content: `Last Updated:16 April 2026

Loan Veda ("we", "our", or "the App") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights.

1. What We Are
Loan Veda is a financial awareness and loan education platform. We do not provide loans, process loan applications, or act as a lender, NBFC, or financial institution of any kind.

2. Information We Collect
We collect only the minimum information necessary to personalise your in-app educational experience:
Name
Mobile number
Designation and department (for relevant content)
City and state (for location-relevant guidance)
Approximate income range (to show relevant educational examples)
Loan topic of interest (e.g., home loan or personal loan education)

3. How We Use Your Information
Your information is used only to:
Personalise the educational content shown within the app
Improve app experience and relevance of guidance content
We do NOT use your information to:
Submit, process, or forward any loan application
Share your data with banks, NBFCs, DSAs, or any financial institution
Sell or trade your data to any third party for commercial purposes

4. Data We Do NOT Access
We do not access:
SMS or call logs
Phone contacts
Camera or media files
Banking credentials or financial account details
Device location beyond city/state input by user

5. Data Sharing
Loan Veda does not share your personal information with any third party, financial institution, lender, NBFC, or DSA.
Your data stays within the app solely for personalising your educational experience.

6. Data Security
We implement appropriate technical and organisational safeguards to protect your information from unauthorised access, loss, or misuse.

7. Data Retention
We retain your information only as long as necessary to provide the in-app educational experience. You may request deletion of your data at any time by contacting us.

8. Children's Privacy
This App is not intended for users under the age of 18. We do not knowingly collect information from minors.

9. Changes to This Policy
We may update this Privacy Policy from time to time. Continued use of the App after any update constitutes your acceptance of the revised policy.

10. Contact Us
If you have any questions about this Privacy Policy:
Email: support@loanveda.in

By using Loan Veda, you consent to this Privacy Policy.`
      }
    }
  },

  hi: {
    // Navbar
    nav: {
      home: 'होम',
      products: 'वित्तीय उत्पाद',
      howItWorks: 'कैसे काम करता है',
      about: 'हमारे बारे में',
      bookCall: 'कॉल बुक करें',
    },
    // Hero
    hero: {
      badge: 'भारत का विश्वसनीय वित्तीय मार्गदर्शन मंच',
      title: 'समझदार वित्तीय निर्णय, आसान तरीके से',
      subtitle: 'ऋण, बैलेंस ट्रांसफर और वित्तीय उत्पादों पर निष्पक्ष मार्गदर्शन — सरकारी कर्मचारियों और कामकाजी पेशेवरों के लिए।',
      cta1: 'उत्पाद देखें',
      cta2: 'मुफ्त कॉल बुक करें',
      trust1: '100% निष्पक्ष',
      trust2: 'RBI अनुपालन सूचना',
      trust3: 'मुफ्त मार्गदर्शन',
    },
    // Products
    products: {
      title: 'वित्तीय उत्पाद जिन पर हम मार्गदर्शन करते हैं',
      learnMore: 'और जानें →',
      items: [
        { name: 'होम लोन', desc: 'सर्वोत्तम दरों पर अपने सपनों का घर बनाएं' },
        { name: 'पर्सनल लोन', desc: 'बिना गारंटी के व्यक्तिगत जरूरतों के लिए तुरंत फंड' },
        { name: 'बैलेंस ट्रांसफर', desc: 'अपना मौजूदा लोन कम ब्याज दर पर ट्रांसफर करें' },
        { name: 'लोन टॉप-अप', desc: 'अपने मौजूदा लोन पर अतिरिक्त राशि प्राप्त करें' },
        { name: 'वाहन लोन', desc: 'प्रतिस्पर्धी दरों पर दोपहिया या कार लोन' },
        { name: 'शिक्षा लोन', desc: 'भारत या विदेश में उच्च शिक्षा के लिए फंड' },
        { name: 'बिज़नेस लोन', desc: 'अपने व्यवसाय या स्टार्टअप को बढ़ाने के लिए पूंजी' },
        { name: 'प्रॉपर्टी पर लोन', desc: 'अपनी संपत्ति का मूल्य अनलॉक करें' },
      ],
    },
    // How It Works
    howItWorks: {
      title: 'लोन वेद आपकी कैसे मदद करता है',
      steps: [
        { title: 'मुफ्त परामर्श बुक करें', desc: 'एक सुविधाजनक 30 मिनट का समय चुनें' },
        { title: 'वित्तीय प्रोफाइल विश्लेषण', desc: 'हम आपकी आय, CIBIL, मौजूदा लोन और पात्रता का विश्लेषण करते हैं' },
        { title: 'कई बैंकों की तुलना', desc: 'आपके लिए सबसे अच्छे ऑफर खोजने के लिए हम शीर्ष बैंकों की तुलना करते हैं' },
        { title: 'सर्वश्रेष्ठ लोन रणनीति', desc: 'सबसे अच्छी ब्याज दर, शर्तें और EMI संरचना प्राप्त करें' },
        { title: 'समर्पित सलाहकार नियुक्त', desc: 'लोन बंद होने तक और उसके बाद भी आपका पर्सनल सलाहकार' },
        { title: 'लोन बंद होने तक सपोर्ट', desc: 'जब तक आपका लोन सफलतापूर्वक बंद नहीं हो जाता, पूर्ण सहायता' },
      ],
    },
    // Why Choose Us
    whyChoose: {
      title: 'हम आपके साथ हैं, लोन बंद होने तक',
      cards: [
        {
          title: 'समर्पित लोन सलाहकार',
          desc: 'आपको एक पर्सनल सलाहकार मिलता है जो लोन बंद होने तक आपके साथ रहता है।',
        },
        {
          title: '100% निष्पक्ष मार्गदर्शन',
          desc: 'हम किसी एक बैंक को नहीं बढ़ावा देते। आपके लिए सबसे अच्छा विकल्प ढूंढते हैं।',
        },
        {
          title: 'छुपे शुल्कों की पहचान',
          desc: 'प्रोसेसिंग फीस, कानूनी शुल्क, बीमा — सब कुछ आपको स्पष्ट रूप से समझाया जाता है।',
        },
        {
          title: 'लोन नेगोशिएशन सपोर्ट',
          desc: 'बेहतर ब्याज दर और शर्तों के लिए बैंकों से बातचीत में हम आपकी मदद करते हैं।',
        },
        {
          title: 'EMI ऑप्टिमाइजेशन',
          desc: 'EMI और अवधि का सबसे अच्छा संतुलन निकालकर आपका मासिक बोझ कम करते हैं।',
        },
        {
          title: 'आजीवन संबंध',
          desc: 'लोन मिलने के बाद भी हम आपके साथ रहते हैं — आजीवन मार्गदर्शन के साथ।',
        },
      ],
      advisors: {
        sectionLabel: 'अपने सलाहकारों से मिलें',
        title: 'विशेषज्ञ जो आपके साथ हैं',
        subtitle: 'हमारे अनुभवी लोन सलाहकार आपकी जरूरतें समझते हैं और हर कदम पर आपका मार्गदर्शन करते हैं।',
        cta: 'मुफ्त कॉल बुक करें',
        list: [
          {
            name: 'गौरव त्रिपाठी',
            role: 'होम लोन विशेषज्ञ',
            experience: '7+ वर्षों का अनुभव',
            assisted: '₹100+ करोड़ लोन सहायता',
          },
          {
            name: 'नेहा शर्मा',
            role: 'पर्सनल लोन विशेषज्ञ',
            experience: '6+ वर्षों का अनुभव',
            assisted: '₹80+ करोड़ लोन सहायता',
          },
          {
            name: 'रोहित वर्मा',
            role: 'लोन सलाहकार',
            experience: '5+ वर्षों का अनुभव',
            assisted: '₹70+ करोड़ लोन सहायता',
          },
          {
            name: 'पूजा मेहता',
            role: 'बैलेंस ट्रांसफर विशेषज्ञ',
            experience: '6+ वर्षों का अनुभव',
            assisted: '₹80+ करोड़ लोन सहायता',
          },
        ],
      },
    },
    // Booking
    booking: {
      title: 'अपनी मुफ्त कॉल बुक करें',
      subtitle: 'सोमवार से शनिवार, सुबह 9:00 – शाम 6:00 बजे उपलब्ध',
      form: {
        name: 'पूरा नाम',
        phone: 'संपर्क नंबर',
        city: 'शहर',
        interest: 'किसमें रुचि है',
        message: 'संदेश',
        submit: 'बुकिंग की पुष्टि करें',
        note: '✓ हम WhatsApp/SMS से पुष्टि करेंगे',
        selectOption: 'एक विकल्प चुनें',
        options: ['होम लोन', 'पर्सनल लोन', 'बैलेंस ट्रांसफर', 'लोन टॉप-अप', 'वाहन लोन', 'शिक्षा लोन', 'बिज़नेस लोन', 'अन्य'],
      },
      errors: {
        name: 'नाम आवश्यक है',
        phone: 'संपर्क नंबर आवश्यक है',
        city: 'शहर आवश्यक है',
        date: 'कृपया एक तारीख चुनें',
        time: 'कृपया एक समय स्लॉट चुनें',
      },
      success: {
        title: 'बुकिंग की पुष्टि हो गई!',
        message: 'हम आपको कॉल करेंगे',
        at: 'को',
      },
      referrer: {
        title: 'रेफरर का नाम',
        placeholder: 'रेफरर का नाम दर्ज करें',
        submit: 'सबमिट करें',
        skip: 'बिना रेफरर के सबमिट करें',
      },
    },
    // Testimonials
    testimonials: {
      title: 'हमारे ग्राहक क्या कहते हैं',
      submitReview: 'समीक्षा दें',
      reviewPopup: {
        title: 'अपना अनुभव साझा करें',
        namePlaceholder: 'आपका नाम',
        rolePlaceholder: 'आपका पद और शहर',
        reviewPlaceholder: 'अपनी समीक्षा लिखें...',
        ratingLabel: 'आपकी रेटिंग',
        submit: 'समीक्षा सबमिट करें',
        success: 'आपकी समीक्षा के लिए धन्यवाद!',
      },
      items: [
        { initials: 'RK', name: 'राजेश कुमार', role: 'केंद्र सरकार कर्मचारी, दिल्ली', quote: 'लोन वेद ने मेरे हफ्तों की रिसर्च बचा दी। एक कॉल में सबसे अच्छा होम लोन रेट मिला!' },
        { initials: 'PS', name: 'प्रिया शर्मा', role: 'बैंक मैनेजर, मुंबई', quote: 'आखिरकार, निष्पक्ष सलाह! उन्होंने बैलेंस ट्रांसफर को सरल शब्दों में समझाया।' },
        { initials: 'AV', name: 'अमित वर्मा', role: 'शिक्षक, लखनऊ', quote: 'कॉल बुक की, 30 मिनट में सभी सवालों के जवाब मिले। बहुत सिफारिश करता हूं!' },
      ],
    },
    // Footer
    footer: {
      tagline: 'अपनों जैसा मार्गदर्शन',
      about: 'सरकारी कर्मचारियों और कामकाजी पेशेवरों को निष्पक्ष मार्गदर्शन के साथ बेहतर वित्तीय निर्णय लेने में मदद करना।',
      quickLinks: 'त्वरित लिंक',
      contact: 'संपर्क',
      phone: '+91 7619888990',
      email: 'support@loanveda.in',
      hours: 'सोम–शनि, सुबह 10 – शाम 6',
      copyright: '© 2024 लोन वेद। सर्वाधिकार सुरक्षित।',
      disclaimer: 'अस्वीकरण: हम केवल वित्तीय जागरूकता और मार्गदर्शन प्रदान करते हैं, विनियमित वित्तीय सलाह नहीं।',
      legal: {
        terms: 'नियम और शर्तें',
        privacy: 'गोपनीयता नीति',
        disclaimer: 'अस्वीकरण',
        complaints: 'शिकायतें',
      },
      termsAndConditions: {
        title: 'नियम और शर्तें',
        content: `अंतिम अद्यतन:16 अप्रैल 2026

Loan Veda में आपका स्वागत है। इस एप्लिकेशन का उपयोग या एक्सेस करके, आप निम्नलिखित नियम एवं शर्तों से सहमत होते हैं। कृपया इन्हें ध्यानपूर्वक पढ़ें।

1. प्लेटफ़ॉर्म की प्रकृति
Loan Veda एक वित्तीय जागरूकता और ऋण शिक्षा प्लेटफ़ॉर्म है।

यह ऐप कोई ऋण, क्रेडिट या अन्य वित्तीय उत्पाद प्रदान नहीं करता है।
यह ऐप कोई बैंक, NBFC, ब्रोकर या वित्तीय संस्था नहीं है।
यह ऐप किसी भी ऋण आवेदन को प्रोसेस, स्वीकृत या वितरित नहीं करता है।
यह ऐप केवल ऋण से संबंधित अवधारणाओं, पात्रता और वित्तीय शर्तों पर सामान्य शैक्षिक जानकारी प्रदान करता है।
प्रदान की गई सभी जानकारी केवल शैक्षिक उद्देश्यों के लिए है।

2. कोई ऋण प्रोसेसिंग नहीं

इस प्लेटफ़ॉर्म के माध्यम से कोई भी ऋण आवेदन जमा, प्रोसेस या अग्रेषित नहीं किया जाता है।
जो उपयोगकर्ता ऋण के लिए आवेदन करना चाहते हैं, उन्हें स्वयं अपने पसंदीदा बैंक या वित्तीय संस्था से संपर्क करना होगा।
Loan Veda का किसी भी ऋण निर्णय, स्वीकृति, वितरण या अस्वीकृति में कोई भूमिका नहीं है।

3. कोई वित्तीय सलाह नहीं

यह ऐप केवल सामान्य शैक्षिक जानकारी प्रदान करता है।
यह व्यक्तिगत वित्तीय, कानूनी, निवेश या कर संबंधी सलाह प्रदान नहीं करता है।
उपयोगकर्ताओं को सभी जानकारी का स्वयं सत्यापन करना चाहिए और कोई भी उधारी निर्णय लेने से पहले प्रमाणित वित्तीय सलाहकार या अपने बैंक से परामर्श करना चाहिए।

4. कोई गारंटी नहीं

Loan Veda निम्नलिखित की कोई गारंटी नहीं देता:

ऋण स्वीकृति या पात्रता
कोई विशिष्ट ब्याज दर या EMI राशि
प्रोसेसिंग समय या परिणाम

ऐप में दर्शाए गए सभी आंकड़े केवल संकेतात्मक हैं और शैक्षिक समझ के लिए हैं।

5. उपयोगकर्ता की जिम्मेदारी

ऐप का उपयोग करके, आप सहमत होते हैं कि:

आप इस प्लेटफ़ॉर्म का उपयोग केवल व्यक्तिगत, गैर-व्यावसायिक और शैक्षिक उद्देश्यों के लिए करेंगे
आप प्लेटफ़ॉर्म का दुरुपयोग या उसमें छेड़छाड़ करने का प्रयास नहीं करेंगे
आप अपने सभी वित्तीय निर्णयों के लिए स्वयं जिम्मेदार होंगे

Loan Veda उपयोगकर्ता द्वारा लिए गए निर्णयों के कारण होने वाले किसी भी वित्तीय नुकसान, ऋण अस्वीकृति, EMI डिफ़ॉल्ट या क्रेडिट प्रभाव के लिए जिम्मेदार नहीं होगा।

6. समुदाय एवं जागरूकता कार्यक्रम

उपयोगकर्ता स्वेच्छा से वित्तीय जागरूकता फैलाने के लिए दूसरों को प्लेटफ़ॉर्म से जोड़ सकते हैं।
सक्रिय भागीदारी के लिए सराहना स्वरूप प्रचारात्मक रिवॉर्ड या वाउचर दिए जा सकते हैं।

ये रिवॉर्ड:

पूरी तरह वैकल्पिक हैं और सुनिश्चित नहीं हैं
किसी भी ऋण, वित्तीय लेन-देन या उधारी गतिविधि से जुड़े नहीं हैं
कभी भी बदले या वापस लिए जा सकते हैं
संबंधित तृतीय-पक्ष वाउचर की शर्तों के अधीन होते हैं

7. डेटा संग्रह एवं गोपनीयता

Loan Veda केवल न्यूनतम जानकारी एकत्र करता है, जो ऐप के भीतर शैक्षिक अनुभव को व्यक्तिगत बनाने के लिए आवश्यक है।

हम:

SMS, संपर्क, कॉल लॉग, मीडिया फ़ाइलें या बैंकिंग क्रेडेंशियल्स तक पहुँच नहीं करते
उपयोगकर्ता डेटा को किसी भी तृतीय पक्ष को व्यावसायिक या मार्केटिंग उद्देश्यों के लिए साझा या बेचते नहीं हैं
किसी भी ऋण आवेदन या वित्तीय लेन-देन के लिए उपयोगकर्ता डेटा का उपयोग नहीं करते

अधिक जानकारी के लिए, कृपया हमारी Privacy Policy देखें।

8. बौद्धिक संपदा

Loan Veda पर उपलब्ध सभी सामग्री, ब्रांडिंग, डिज़ाइन और तकनीक संरक्षित बौद्धिक संपदा हैं।
उपयोगकर्ताओं को केवल व्यक्तिगत उपयोग के लिए सीमित, व्यक्तिगत और गैर-हस्तांतरणीय लाइसेंस प्रदान किया जाता है।

9. दायित्व की सीमा

सेवाएँ "जैसी हैं" (as-is) आधार पर प्रदान की जाती हैं।
Loan Veda किसी भी अप्रत्यक्ष, परिणामी या वित्तीय क्षति के लिए उत्तरदायी नहीं होगा।
यदि कोई दायित्व बनता है, तो वह उपयोगकर्ता द्वारा भुगतान की गई राशि (आमतौर पर शून्य) से अधिक नहीं होगा।

10. शर्तों में परिवर्तन

Loan Veda बिना पूर्व सूचना के इन शर्तों को कभी भी अपडेट कर सकता है।
किसी भी अपडेट के बाद ऐप का निरंतर उपयोग संशोधित शर्तों की स्वीकृति माना जाएगा।

11. लागू कानून

ये शर्तें भारत के कानूनों द्वारा शासित होंगी।
किसी भी विवाद की स्थिति में भारत की अदालतों का अधिकार क्षेत्र लागू होगा।

12. संपर्क

किसी भी प्रश्न या समस्या के लिए:
ईमेल: support@loanveda.in

13. स्वीकृति

ऐप को इंस्टॉल, एक्सेस या उपयोग करके, आप पुष्टि करते हैं कि आपने इन नियम एवं शर्तों को पढ़ लिया है, समझ लिया है, और उनसे सहमत हैं।`
      },
      privacyPolicy: {
        title: 'गोपनीयता नीति',
        content: `अंतिम अद्यतन:16 अप्रैल 2026

Loan Veda ("हम", "हमारा", या "ऐप") आपकी गोपनीयता की सुरक्षा के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि हम कौन-सी जानकारी एकत्र करते हैं, उसका उपयोग कैसे करते हैं, और आपके अधिकार क्या हैं।

1. हम क्या हैं

Loan Veda एक वित्तीय जागरूकता और ऋण शिक्षा प्लेटफ़ॉर्म है। हम ऋण प्रदान नहीं करते, ऋण आवेदन प्रोसेस नहीं करते, और न ही किसी भी प्रकार के ऋणदाता, NBFC या वित्तीय संस्था के रूप में कार्य करते हैं।

2. हम कौन-सी जानकारी एकत्र करते हैं

हम केवल वही न्यूनतम जानकारी एकत्र करते हैं जो आपके ऐप के भीतर शैक्षिक अनुभव को व्यक्तिगत बनाने के लिए आवश्यक है:

नाम
मोबाइल नंबर
पदनाम और विभाग (संबंधित सामग्री के लिए)
शहर और राज्य (स्थान-आधारित मार्गदर्शन के लिए)
अनुमानित आय सीमा (संबंधित शैक्षिक उदाहरण दिखाने के लिए)
ऋण से संबंधित रुचि (जैसे होम लोन या पर्सनल लोन से जुड़ी जानकारी)

3. हम आपकी जानकारी का उपयोग कैसे करते हैं

आपकी जानकारी का उपयोग केवल निम्नलिखित के लिए किया जाता है:

ऐप के भीतर दिखाए जाने वाले शैक्षिक कंटेंट को व्यक्तिगत बनाने के लिए
ऐप अनुभव और मार्गदर्शन सामग्री की प्रासंगिकता को बेहतर बनाने के लिए

हम आपकी जानकारी का उपयोग निम्नलिखित के लिए नहीं करते:

किसी भी ऋण आवेदन को जमा, प्रोसेस या अग्रेषित करने के लिए
आपके डेटा को बैंकों, NBFCs, DSAs या किसी भी वित्तीय संस्था के साथ साझा करने के लिए
किसी भी तृतीय पक्ष को व्यावसायिक उद्देश्यों के लिए आपका डेटा बेचने या साझा करने के लिए

4. हम कौन-सा डेटा एक्सेस नहीं करते

हम निम्नलिखित तक पहुँच नहीं करते:

SMS या कॉल लॉग
फोन संपर्क
कैमरा या मीडिया फ़ाइलें
बैंकिंग क्रेडेंशियल्स या वित्तीय खाते की जानकारी
उपयोगकर्ता द्वारा दिए गए शहर/राज्य से आगे की लोकेशन

5. डेटा साझा करना

Loan Veda आपकी व्यक्तिगत जानकारी किसी भी तृतीय पक्ष, वित्तीय संस्था, ऋणदाता, NBFC या DSA के साथ साझा नहीं करता है।
आपका डेटा केवल आपके शैक्षिक अनुभव को व्यक्तिगत बनाने के लिए ऐप के भीतर ही रहता है।

6. डेटा सुरक्षा

हम आपकी जानकारी को अनधिकृत पहुँच, हानि या दुरुपयोग से बचाने के लिए उचित तकनीकी और संगठनात्मक सुरक्षा उपाय लागू करते हैं।

7. डेटा संरक्षण अवधि

हम आपकी जानकारी को केवल उतनी अवधि तक सुरक्षित रखते हैं जितनी ऐप के भीतर शैक्षिक अनुभव प्रदान करने के लिए आवश्यक है।
आप किसी भी समय हमसे संपर्क करके अपने डेटा को हटाने का अनुरोध कर सकते हैं।

8. बच्चों की गोपनीयता

यह ऐप 18 वर्ष से कम आयु के उपयोगकर्ताओं के लिए नहीं है।
हम जानबूझकर नाबालिगों से कोई जानकारी एकत्र नहीं करते हैं।

9. इस नीति में परिवर्तन

हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं।
किसी भी अपडेट के बाद ऐप का उपयोग जारी रखना संशोधित नीति की स्वीकृति माना जाएगा।

10. हमसे संपर्क करें

यदि आपके पास इस गोपनीयता नीति से संबंधित कोई प्रश्न है:
ईमेल: support@loanveda.in

Loan Veda का उपयोग करके, आप इस गोपनीयता नीति से सहमति देते हैं।`
      }
    }
  }
};

export default translations;