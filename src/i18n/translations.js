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
        { title: 'Book a Free Call', desc: 'Choose a convenient 30-min time slot' },
        { title: 'Discuss Your Needs', desc: 'Our expert understands your financial profile' },
        { title: 'Get Guidance', desc: 'Receive unbiased product recommendations tailored for you' },
      ],
    },
    // Why Choose Us
    whyChoose: {
      title: 'Why Choose Loan Veda',
      cards: [
        { title: 'Built for Govt Employees & Professionals', desc: 'Salary-based eligibility checks and govt scheme guidance' },
        { title: '100% Unbiased Guidance', desc: "We don't push any specific bank or lender" },
        { title: 'Save Your Precious Time', desc: 'Get answers in one call instead of visiting multiple banks' },
        { title: 'Safe & Confidential', desc: 'Your data is never shared without your consent' },
      ],
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
        // PLACEHOLDER — replace with real content
        { initials: 'RK', name: 'Rajesh Kumar', role: 'Central Govt. Employee, Delhi', quote: 'Loan Veda saved me weeks of research. Got the best home loan rate in just one call!' },
        { initials: 'PS', name: 'Priya Sharma', role: 'Bank Manager, Mumbai', quote: 'Finally, unbiased advice! They explained balance transfer in simple terms.' },
        { initials: 'AV', name: 'Amit Verma', role: 'Teacher, Lucknow', quote: 'Booked a call, got all my questions answered in 30 mins. Highly recommend!' },
      ],
    },
    // Footer
    footer: {
      tagline: 'Your trusted financial guidance partner', // PLACEHOLDER — replace with real content
      about: 'Helping government employees and working professionals make smarter financial decisions with unbiased guidance.', // PLACEHOLDER — replace with real content
      quickLinks: 'Quick Links',
      financialProducts: 'Financial Products',
      contact: 'Contact',
      phone: '+91 XXXXX XXXXX', // PLACEHOLDER — replace with real content
      email: 'hello@loanveda.in', // PLACEHOLDER — replace with real content
      hours: 'Mon–Sat, 9AM–6PM',
      copyright: '© 2024 Loan Veda. All rights reserved.',
      disclaimer: 'Disclaimer: We provide financial awareness and guidance only, not regulated financial advice.',
    },
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
        { title: 'मुफ्त कॉल बुक करें', desc: 'एक सुविधाजनक 30 मिनट का समय चुनें' },
        { title: 'अपनी ज़रूरतें बताएं', desc: 'हमारे विशेषज्ञ आपकी वित्तीय प्रोफाइल समझते हैं' },
        { title: 'मार्गदर्शन प्राप्त करें', desc: 'आपके लिए तैयार निष्पक्ष उत्पाद सिफारिशें पाएं' },
      ],
    },
    // Why Choose Us
    whyChoose: {
      title: 'हमें क्यों चुनें',
      cards: [
        { title: 'सरकारी कर्मचारियों और पेशेवरों के लिए बना', desc: 'वेतन-आधारित पात्रता जांच और सरकारी योजना मार्गदर्शन' },
        { title: '100% निष्पक्ष मार्गदर्शन', desc: 'हम किसी विशेष बैंक या ऋणदाता को नहीं बढ़ावा देते' },
        { title: 'अपना कीमती समय बचाएं', desc: 'कई बैंकों में जाने के बजाय एक कॉल में जवाब पाएं' },
        { title: 'सुरक्षित और गोपनीय', desc: 'आपका डेटा बिना सहमति के कभी साझा नहीं किया जाता' },
      ],
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
        // PLACEHOLDER — replace with real content
        { initials: 'RK', name: 'राजेश कुमार', role: 'केंद्र सरकार कर्मचारी, दिल्ली', quote: 'लोन वेद ने मेरे हफ्तों की रिसर्च बचा दी। एक कॉल में सबसे अच्छा होम लोन रेट मिला!' },
        { initials: 'PS', name: 'प्रिया शर्मा', role: 'बैंक मैनेजर, मुंबई', quote: 'आखिरकार, निष्पक्ष सलाह! उन्होंने बैलेंस ट्रांसफर को सरल शब्दों में समझाया।' },
        { initials: 'AV', name: 'अमित वर्मा', role: 'शिक्षक, लखनऊ', quote: 'कॉल बुक की, 30 मिनट में सभी सवालों के जवाब मिले। बहुत सिफारिश करता हूं!' },
      ],
    },
    // Footer
    footer: {
      tagline: 'आपका विश्वसनीय वित्तीय मार्गदर्शन साथी', // PLACEHOLDER — replace with real content
      about: 'सरकारी कर्मचारियों और कामकाजी पेशेवरों को निष्पक्ष मार्गदर्शन के साथ बेहतर वित्तीय निर्णय लेने में मदद करना।', // PLACEHOLDER — replace with real content
      quickLinks: 'त्वरित लिंक',
      financialProducts: 'वित्तीय उत्पाद',
      contact: 'संपर्क',
      phone: '+91 XXXXX XXXXX', // PLACEHOLDER — replace with real content
      email: 'hello@loanveda.in', // PLACEHOLDER — replace with real content
      hours: 'सोम–शनि, सुबह 9 – शाम 6',
      copyright: '© 2024 लोन वेद। सर्वाधिकार सुरक्षित।',
      disclaimer: 'अस्वीकरण: हम केवल वित्तीय जागरूकता और मार्गदर्शन प्रदान करते हैं, विनियमित वित्तीय सलाह नहीं।',
    },
  },
};

export default translations;
