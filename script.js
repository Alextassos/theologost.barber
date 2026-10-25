document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const translations = {
    en: {
      home_title: "Theologos Barber | Piraeus",
      home_description: "Traditional grooming and modern barbering at Theologos Barber in Piraeus. Book your appointment online.",
      menu_title: "Services & Prices | Theologos Barber",
      page_description: "Explore the haircut, beard, and shaving services at Theologos Gentlemen's Barber in Piraeus.",
      language: "Language",
      main_navigation: "Main navigation",
      nav_home: "Home",
      nav_about: "About Us",
      nav_services: "Services",
      nav_contact: "Contact",
      brand_name: "Theologos Gentlemen's Barber",
      brand_subtitle: "Gentlemen's Barber",
      established: "Est. 2024",
      book_appointment: "Book your appointment",
      book_short: "Book an appointment",
      about_title: "About us",
      about_copy: "Welcome to Theologos Barber. Est 2024, we blend traditional grooming with modern techniques. Experience a premium haircut and shave in a masculine, relaxing environment.",
      about_image_alt: "The barber and a client in the shop, with Theologos Barber catalogs in the foreground",
      experience_eyebrow: "The Theologos experience",
      experience_title: "A little more than a haircut",
      experience_grooming_title: "Thoughtful grooming",
      experience_grooming_copy: "From a fresh cut to a carefully shaped beard, every appointment is tailored to what suits you.",
      experience_detail_title: "Care in every detail",
      experience_detail_copy: "We take time with the finishing touches, so you leave feeling sharp, comfortable and looked after.",
      experience_craft_title: "Classic craft, fresh style",
      experience_craft_copy: "Traditional barbering and current techniques come together for a look that feels like your own.",
      experience_unwind_title: "Time to unwind",
      experience_unwind_copy: "Settle into the chair, take a breath and enjoy a relaxed visit in a welcoming barber shop.",
      slogan: "We know your style better",
      service_eyebrow: "The art of looking sharp",
      services_title: "Our services",
      service_haircut: "Haircut",
      service_haircut_copy: "A precise, considered cut shaped around your style.",
      service_clipper: "Clipper Cut",
      service_clipper_copy: "A clean, even finish with sharp, tidy edges.",
      service_kids: "Kids Haircut",
      service_kids_copy: "A relaxed, friendly haircut for our younger guests.",
      service_beard_trim: "Beard Trim",
      service_beard_trim_copy: "Bring your beard back into shape with a clean finish.",
      service_beard_shape: "Beard Shaping",
      service_beard_shape_copy: "Defined lines and balanced contours, tailored to you.",
      service_traditional_shave: "Traditional Shave",
      service_traditional_shave_copy: "A close, classic shave with a calm barbershop touch.",
      service_gentlemen_shave: "Gentlemen's Shave",
      service_gentlemen_shave_copy: "A more indulgent shave and a moment to unwind.",
      service_signature_shave: "Theologos Signature Shave",
      service_signature_shave_copy: "Our signature ritual: attentive, unhurried and refined.",
      full_menu: "Explore the full service menu",
      contact_title: "Visit the Barbershop",
      directions: "Get directions",
      call_us: "Call us",
      address: "Odysséa Androutsou 147, Piraeus",
      opening_hours: "Opening Hours",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      find_us: "Find us on",
      instagram: "Instagram",
      facebook: "Facebook",
      english: "English",
      greek: "Greek",
      copyright: "© Alexandros Tassos. All rights reserved.",
      menu_hero_title: "Crafted for your style",
      menu_hero_copy: "Traditional barbering, thoughtful service, and time well spent.",
      menu_eyebrow: "The service menu",
      menu_intro_title: "The details matter",
      menu_intro_copy: "Choose your service and settle in. Every visit is finished with care and attention to detail.",
      shave_image_alt: "The barber giving a client a traditional hot-towel shave",
      prices_title: "Services & prices",
      service_razor_lines: "Razor Lines",
      service_nose_waxing: "Nose Waxing",
      service_ear_waxing: "Ear Waxing",
      service_camouflage_hair: "White Hair Camouflage (Hair)",
      service_camouflage_beard: "White Hair Camouflage (Beard)",
      service_face_mask: "Face Mask",
      service_black_gold_mask: "Black/Gold Mask",
      address_footer: "Odyssea Androutsou 147 · Piraeus"
    },
    el: {
      home_title: "Theologos Barber | Πειραιάς",
      home_description: "Παραδοσιακή περιποίηση και σύγχρονη τέχνη κουρέματος στο Theologos Barber στον Πειραιά. Κλείστε το ραντεβού σας online.",
      menu_title: "Υπηρεσίες και τιμές | Theologos Barber",
      page_description: "Δείτε τις υπηρεσίες κουρέματος, περιποίησης γενειάδας και ξυρίσματος του Theologos Gentlemen's Barber στον Πειραιά.",
      language: "Γλώσσα",
      main_navigation: "Κύρια πλοήγηση",
      nav_home: "Αρχική",
      nav_about: "Σχετικά",
      nav_services: "Υπηρεσίες",
      nav_contact: "Επικοινωνία",
      brand_name: "Theologos Gentlemen's Barber",
      brand_subtitle: "Κουρείο Κυρίων",
      established: "Από το 2024",
      book_appointment: "Κλείστε ραντεβού",
      book_short: "Κλείστε ραντεβού",
      about_title: "Σχετικά με εμάς",
      about_copy: "Καλώς ήρθατε στο Theologos Barber. Από το 2024 συνδυάζουμε την παραδοσιακή περιποίηση με σύγχρονες τεχνικές. Απολαύστε ένα προσεγμένο κούρεμα και ξύρισμα σε έναν ανδρικό, χαλαρωτικό χώρο.",
      about_image_alt: "Ο κουρέας και ένας πελάτης στο κατάστημα, με καταλόγους Theologos Barber στο προσκήνιο",
      experience_eyebrow: "Η εμπειρία Theologos",
      experience_title: "Κάτι παραπάνω από ένα κούρεμα",
      experience_grooming_title: "Περιποίηση με φροντίδα",
      experience_grooming_copy: "Από ένα φρέσκο κούρεμα μέχρι ένα προσεγμένο σχήμα γενειάδας, κάθε ραντεβού προσαρμόζεται σε εσάς.",
      experience_detail_title: "Προσοχή σε κάθε λεπτομέρεια",
      experience_detail_copy: "Φροντίζουμε και την τελευταία λεπτομέρεια, ώστε να φεύγετε περιποιημένοι, άνετοι και ανανεωμένοι.",
      experience_craft_title: "Κλασική τέχνη, σύγχρονο στιλ",
      experience_craft_copy: "Η παραδοσιακή τέχνη του κουρέα συναντά τις σύγχρονες τεχνικές για ένα στιλ που σας εκφράζει.",
      experience_unwind_title: "Ώρα για χαλάρωση",
      experience_unwind_copy: "Καθίστε αναπαυτικά, χαλαρώστε και απολαύστε μια ευχάριστη επίσκεψη στο κουρείο μας.",
      slogan: "Ξέρουμε το στιλ σας καλύτερα",
      service_eyebrow: "Η τέχνη της περιποίησης",
      services_title: "Οι υπηρεσίες μας",
      service_haircut: "Κούρεμα",
      service_haircut_copy: "Ένα προσεγμένο κούρεμα, διαμορφωμένο σύμφωνα με το στιλ σας.",
      service_clipper: "Κούρεμα με μηχανή",
      service_clipper_copy: "Ομοιόμορφο αποτέλεσμα με καθαρές, περιποιημένες γραμμές.",
      service_kids: "Παιδικό κούρεμα",
      service_kids_copy: "Ένα άνετο και φιλικό κούρεμα για τους μικρούς μας φίλους.",
      service_beard_trim: "Περιποίηση γενειάδας",
      service_beard_trim_copy: "Δώστε ξανά σχήμα στη γενειάδα σας με ένα καθαρό τελείωμα.",
      service_beard_shape: "Σχηματισμός γενειάδας",
      service_beard_shape_copy: "Καθαρές γραμμές και ισορροπημένο σχήμα, προσαρμοσμένα σε εσάς.",
      service_traditional_shave: "Παραδοσιακό ξύρισμα",
      service_traditional_shave_copy: "Ένα κλασικό, βαθύ ξύρισμα με την περιποίηση του κουρείου.",
      service_gentlemen_shave: "Ξύρισμα κυρίων",
      service_gentlemen_shave_copy: "Μια πιο απολαυστική εμπειρία ξυρίσματος και χαλάρωσης.",
      service_signature_shave: "Ξύρισμα υπογραφής Theologos",
      service_signature_shave_copy: "Η ξεχωριστή μας τελετουργία: προσεγμένη, χαλαρή και εκλεπτυσμένη.",
      full_menu: "Δείτε όλες τις υπηρεσίες",
      contact_title: "Επισκεφθείτε το κουρείο",
      directions: "Οδηγίες πρόσβασης",
      call_us: "Καλέστε μας",
      address: "Οδυσσέα Ανδρούτσου 147, Πειραιάς",
      opening_hours: "Ωράριο λειτουργίας",
      monday: "Δευτέρα",
      tuesday: "Τρίτη",
      wednesday: "Τετάρτη",
      thursday: "Πέμπτη",
      friday: "Παρασκευή",
      saturday: "Σάββατο",
      sunday: "Κυριακή",
      closed: "Κλειστά",
      find_us: "Βρείτε μας στα",
      instagram: "Instagram",
      facebook: "Facebook",
      english: "Αγγλικά",
      greek: "Ελληνικά",
      copyright: "© Alexandros Tassos. Με επιφύλαξη παντός δικαιώματος.",
      menu_hero_title: "Φτιαγμένο για το στιλ σας",
      menu_hero_copy: "Παραδοσιακή τέχνη κουρέματος, προσεγμένη εξυπηρέτηση και χρόνος αφιερωμένος σε εσάς.",
      menu_eyebrow: "Ο κατάλογος υπηρεσιών",
      menu_intro_title: "Η λεπτομέρεια κάνει τη διαφορά",
      menu_intro_copy: "Επιλέξτε την υπηρεσία σας και χαλαρώστε. Κάθε επίσκεψη ολοκληρώνεται με φροντίδα και προσοχή στη λεπτομέρεια.",
      shave_image_alt: "Ο κουρέας προσφέρει σε πελάτη παραδοσιακό ξύρισμα με ζεστή πετσέτα",
      prices_title: "Υπηρεσίες και τιμές",
      service_razor_lines: "Γραμμές με ξυράφι",
      service_nose_waxing: "Αποτρίχωση μύτης",
      service_ear_waxing: "Αποτρίχωση αυτιών",
      service_camouflage_hair: "Κάλυψη λευκών τριχών (μαλλιά)",
      service_camouflage_beard: "Κάλυψη λευκών τριχών (γένια)",
      service_face_mask: "Μάσκα προσώπου",
      service_black_gold_mask: "Μάσκα Black/Gold",
      address_footer: "Οδυσσέα Ανδρούτσου 147 · Πειραιάς"
    }
  };

  document.addEventListener("click", event => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !(event.target instanceof Element)
    ) {
      return;
    }

    const link = event.target.closest("a[href]");
    if (!link || link.target === "_blank") {
      return;
    }

    const destination = new URL(link.href, window.location.href);
    if (
      destination.origin === window.location.origin &&
      destination.pathname !== window.location.pathname
    ) {
      window.sessionStorage.setItem("theologos-page-transition", "true");
    }
  });

  if (window.sessionStorage.getItem("theologos-page-transition") === "true") {
    window.sessionStorage.removeItem("theologos-page-transition");
    document.documentElement.classList.add("page-transitioning");
  }

  document.body.classList.add("page-loaded");

  const applyLanguage = language => {
    const selectedLanguage = language === "el" ? "el" : "en";
    const copy = translations[selectedLanguage];

    document.documentElement.lang = selectedLanguage;
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const translation = copy[element.dataset.i18n];
      if (translation !== undefined) {
        element.textContent = translation;
      }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(element => {
      const translation = copy[element.dataset.i18nAria];
      if (translation !== undefined) {
        element.setAttribute("aria-label", translation);
      }
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(element => {
      const translation = copy[element.dataset.i18nAlt];
      if (translation !== undefined) {
        element.alt = translation;
      }
    });
    document.querySelectorAll("[data-i18n-title]").forEach(element => {
      const translation = copy[element.dataset.i18nTitle];
      if (translation !== undefined) {
        element.textContent = translation;
      }
    });
    document.querySelectorAll("[data-i18n-content]").forEach(element => {
      const translation = copy[element.dataset.i18nContent];
      if (translation !== undefined) {
        element.content = translation;
      }
    });
    document.querySelectorAll("[data-i18n-language]").forEach(element => {
      const translation = copy[element.dataset.i18nLanguage];
      if (translation !== undefined) {
        element.setAttribute("aria-label", translation);
      }
    });
    document.querySelectorAll("[data-language]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.language === selectedLanguage));
    });
  };

  const savedLanguage = window.localStorage.getItem("theologos-language") || "en";
  applyLanguage(savedLanguage);

  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      window.localStorage.setItem("theologos-language", language);
      applyLanguage(language);
    });
  });

  if (menu) {
    const updateMenu = () => {
      menu.classList.toggle("scrolled", window.scrollY > 50);
    };

    updateMenu();
    window.addEventListener("scroll", updateMenu, { passive: true });
  }
});
