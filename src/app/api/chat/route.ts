// app/api/chat/route.ts
export async function POST(req: Request) {
  const WHATSAPP_LINK = `<a href="https://wa.me/255718245045" target="_blank" rel="noopener noreferrer">WhatsApp</a>`;
  const WHATSAPP_LINK_SW = `<a href="https://wa.me/255718245045" target="_blank" rel="noopener noreferrer">WhatsApp</a>`;

  try {
    const { message } = await req.json();
    const lowerMsg = message.toLowerCase().trim();
    
    // Comprehensive greeting detection
    const greetings = [
      "hii", "hi", "hello", "hey", 
      "mambo", "mambo vipi", "mamboo", "poa", 
      "habari", "habari yako", "habari za asubuhi", "habari za mchana", "habari za jioni",
      "niaje", "vipi", "sasa", "sasa vipi",
      "good morning", "good afternoon", "good evening",
      "jambo", "hujambo", "sijambo", "hatujambo",
      "shikamoo", "marahaba",
      "salama", "salama?",
      "vipi kaka", "vipi dada", "mambo kaka", "mambo dada",
      "fresh", "freshi", "super",
      "how are you", "how's it going", "what's up", "sup"
    ];
    
    // Detect language (simple detection based on Swahili words)
    const isSwahili = lowerMsg.includes("sasa") || lowerMsg.includes("mambo") || lowerMsg.includes("habari") || 
                      lowerMsg.includes("nafasi") || lowerMsg.includes("ngapi") || lowerMsg.includes("vizuri") ||
                      lowerMsg.includes("asante") || lowerMsg.includes("karibu") || lowerMsg.includes("nisaidie") ||
                      lowerMsg.includes("niaje") || lowerMsg.includes("vipi") || lowerMsg.includes("poa") ||
                      lowerMsg.includes("jambo") || lowerMsg.includes("shikamoo");
    
    // Simple keyword-based responses
    let reply = "";
    
    // ============= GREETINGS & INTRODUCTION (ENHANCED) =============
    if (greetings.some(greeting => lowerMsg.includes(greeting))) {
      if (isSwahili) {
        reply = `✨ Karibu sana Fundi Juma! ✨\n\nHabari yako? Niko hapa kukusaidia kupata mavazi bora zaidi. Ninafurahi kukutana nawe! 😊\n\nNiambie, unatafuta mavazi ya harusi, sherehe, au unahitaji ushauri wa mitindo? Niko tayari kukusaidia kuonekana mzuri sana!`;
      } else {
        reply = `✨ Welcome to Fundi Juma! ✨\n\nHello there! How are you doing today? I'm your personal fashion stylist, and I'm excited to help you look absolutely amazing! 😊\n\nWhat brings you here today? Are you looking for wedding attire, party outfits, or just some fashion advice? Let's create something beautiful together!`;
      }
    }
    
    // ============= NAME & IDENTITY =============
    else if (lowerMsg.includes("your name") || lowerMsg.includes("who are you") || lowerMsg.includes("jina lako") || lowerMsg.includes("wewe ni nani")) {
      if (isSwahili) {
        reply = `Mimi ni Fundi Juma's AI Stylist! 🎨 Ninabobea kukusaidia kupata mavazi yanayokufaa kulingana na umbo lako, rangi ya ngozi, na tukio lako. Kuanzia mavazi ya kitanzania hadi mitindo ya kisasa, niko hapa kukuelekeza uonekane bora kabisa!\n\nNa wewe, ninaweza kukusaidiaje leo?`;
      } else {
        reply = `I'm Fundi Juma's AI Fashion Stylist! 🎨 I specialize in helping you discover the perfect outfit that matches your body type, skin tone, and occasion. From traditional Tanzanian wear to modern couture, I'm here to guide you to look your absolute best!\n\nHow can I help you today?`;
      }
    }
    
    // ============= FASHION & STYLE ADVICE =============
    else if (lowerMsg.includes("style") || lowerMsg.includes("fashion advice") || lowerMsg.includes("what should i wear") || lowerMsg.includes("nivae nini") || lowerMsg.includes("ushauri")) {
      if (isSwahili) {
        reply = `💃 Mavazi ni kujiamini! Hapa kuna vidokezo vyangu vya mtindo:\n\n• **Jua umbo lako**: Angazia sifa zako nzuri\n• **Rangi ni muhimu**: Rangi za joto kwa ngozi ya joto, rangi za baridi kwa ngozi ya baridi\n• **Kubana ni kila kitu**: Mavazi yanayokubana vizuri yanakufanya uonekane nadhifu\n• **Vifaa**: Vito vinavyofaa vinabadilisha mavazi yoyote\n\nUnataka ushauri wa kibinafsi? Wasiliana nasi kwa ${WHATSAPP_LINK_SW} kwa ushauri wa mitindo!`;
      } else {
        reply = `💃 Fashion is about confidence! Here are my top styling tips:\n\n• **Know your body type**: Highlight your best features\n• **Colors matter**: Warm tones for warm skin, cool tones for cool skin\n• **Fit is everything**: Well-fitted clothes make you look sharp\n• **Accessorize**: The right jewelry transforms any outfit\n\nWant personalized advice? Contact us on ${WHATSAPP_LINK} for a styling consultation!`;
      }
    }
    
    // ============= BODY TYPE ADVICE =============
    else if (lowerMsg.includes("body type") || lowerMsg.includes("shape") || lowerMsg.includes("what suit me") || lowerMsg.includes("umbo") || lowerMsg.includes("mwili")) {
      if (isSwahili) {
        reply = `👗 Kupata mavazi yanayokufaa huanza kwa kuelewa umbo lako:\n\n• **Umbo la peari**: Sketi za A-line, blauzi zisizo na mabega\n• **Umbo la hourglass**: Nguo za wrap, viuno vilivyobana\n• **Umbo la tofaa**: Shati za V-neck, viuno vya juu\n• **Umbo la mstatili**: Blauzi za peplum, mitindo yenye mikanda\n\nAcha nikusaidie kupata mitindo inayoadhimisha urembo wako wa kipekee! ${WHATSAPP_LINK_SW}`;
      } else {
        reply = `👗 Finding your perfect fit starts with understanding your body shape:\n\n• **Pear shape**: A-line skirts, off-shoulder tops\n• **Hourglass**: Wrap dresses, fitted waistlines\n• **Apple shape**: V-necks, empire waistlines\n• **Rectangle**: Peplum tops, belted styles\n\nLet me help you find styles that celebrate YOUR unique beauty! ${WHATSAPP_LINK}`;
      }
    }
    
    // ============= COLOR ADVICE =============
    else if (lowerMsg.includes("color") || lowerMsg.includes("what color") || lowerMsg.includes("skin tone") || lowerMsg.includes("rangi") || lowerMsg.includes("ngozi")) {
      if (isSwahili) {
        reply = `🎨 Rangi hubadilisha sura yako! Hapa kile kinachofaa:\n\n**Ngozi ya joto**: Dhahabu, kijani cha zeituni, kahawia, krimu, nyekundu ya machungwa\n**Ngozi ya baridi**: Fedha, bluu ya kifalme, zumaridi, nyeupe safi, pink\n**Neutral**: Inafaa na kila kitu!\n\nKidokezo: Navy blue na burgundy humfaa kila mtu! Unataka kupata rangi zako bora? Zungumza nasi kwa ${WHATSAPP_LINK_SW}`;
      } else {
        reply = `🎨 Colors transform your look! Here's what works:\n\n**Warm Skin Tone**: Gold, olive green, camel, cream, orange-red\n**Cool Skin Tone**: Silver, royal blue, emerald, pure white, pink\n**Neutral**: Works with everything!\n\nPro tip: Navy blue and burgundy look amazing on everyone! Want to find your perfect palette? Chat with us on ${WHATSAPP_LINK}`;
      }
    }
    
    // ============= WEDDING ATTIRE =============
    else if (lowerMsg.includes("wedding") || lowerMsg.includes("bride") || lowerMsg.includes("groom") || lowerMsg.includes("harusi") || lowerMsg.includes("bibi harusi") || lowerMsg.includes("bwana harusi")) {
      if (isSwahili) {
        reply = `💍 Hongera kwa siku yako maalum! Tunabobea katika:\n\n**Kwa Bibi Harusi**: Gauni nyeupe za kifahari, kanzu za kitamaduni, nguo za kisasa\n**Kwa Bwana Harusi**: Suti kali, kanzu za kifahari, dashiki za kisasa\n**Kwa Wageni**: Mavazi maridadi yanayofaa\n\nKila vazi la harusi linatengenezwa maalum kwa ajili yako! Wacha tuunde kitu cha kichawi pamoja. Wasiliana nasi kwa ${WHATSAPP_LINK_SW} kwa ushauri wa harusi!`;
      } else {
        reply = `💍 Congratulations on your special day! We specialize in:\n\n**For Brides**: Elegant white gowns, traditional kanzu, modern fusion dresses\n**For Grooms**: Sharp suits, classic kanzu, trendy dashiki\n**For Guests**: Stylish yet appropriate outfits\n\nEvery wedding outfit is custom-made to fit perfectly! Let's create something magical together. Contact us on ${WHATSAPP_LINK} for a wedding consultation!`;
      }
    }
    
    // ============= BIRTHDAY OUTFITS =============
    else if (lowerMsg.includes("birthday") || lowerMsg.includes("party") || lowerMsg.includes("sherehe") || lowerMsg.includes("kuzaliwa")) {
      if (isSwahili) {
        reply = `🎂 Siku yako ya kuzaliwa inastahili kukumbukwa! Kwa sherehe za kuzaliwa, tunapendekeza:\n\n• **Sherehe ya Jioni**: Nguo zenye ving'aro, koti za velvet\n• **Mkusanyiko wa Kawaida**: Jumpsuit za maridadi, mashati yaliyotengenezwa\n• **Miaka Maalum**: Nguo za kubuni za kipekee\n\nFanya vichwa vigeuke siku yako maalum! Wacha tubuni kitu maalum kwako. ${WHATSAPP_LINK_SW}`;
      } else {
        reply = `🎂 Your birthday deserves to be unforgettable! For birthday celebrations, we recommend:\n\n• **Evening Party**: Sequined dresses, velvet blazers\n• **Casual Gathering**: Chic jumpsuits, tailored shirts\n• **Milestone Birthdays**: Custom designer pieces\n\nMake heads turn on your special day! Let's design something just for you. ${WHATSAPP_LINK}`;
      }
    }
    
    // ============= TRADITIONAL WEAR =============
    else if (lowerMsg.includes("traditional") || lowerMsg.includes("kitenge") || lowerMsg.includes("kanzu") || lowerMsg.includes("tanzanian") || lowerMsg.includes("tamaduni")) {
      if (isSwahili) {
        reply = `🇹🇿 Tukumbatie urithi wetu mzuri wa Kitanzania!\n\nTunabobea katika:\n• **Kanzu**: Inafaa kwa harusi na sherehe za kidini\n• **Nguo za Kitenge**: Mitindo ya kisasa ya Kiafrika\n• **Michoro ya Ujasiri**: Kubuni maalum zinazosimulia hadithi yako\n\nMavazi ya kitamaduni yanaweza kuwa ya kisasa na ya kifahari. Wacha tuunde kitu kinachoheshimu utamaduni wako huku kikikufanya uonekane mzuri! ${WHATSAPP_LINK_SW}`;
      } else {
        reply = `🇹🇿 Embrace our beautiful Tanzanian heritage!\n\nWe specialize in:\n• **Kanzu**: Perfect for weddings and religious events\n• **Kitenge Dresses**: Vibrant, modern African fashion\n• **Bold Patterns**: Custom designs that tell your story\n\nTraditional wear can be modern and elegant. Let us create something that honors your culture while making you look amazing! ${WHATSAPP_LINK}`;
      }
    }
    
    // ============= BUSINESS/CORPORATE =============
    else if (lowerMsg.includes("work") || lowerMsg.includes("corporate") || lowerMsg.includes("office") || lowerMsg.includes("professional") || lowerMsg.includes("kazi") || lowerMsg.includes("ofisini")) {
      if (isSwahili) {
        reply = `👔 Fanya hisia kubwa kwa mavazi yetu ya kikazi:\n\n• **Suti za Nguvu**: Zilizotengenezwa kwa ukamilifu\n• **Kawaida ya Biashara**: Maridadi na starehe\n• **Tayari kwa Mkutano**: Miundo inayoamuru heshima\n\nVaa kwa mafanikio unayostahili! ${WHATSAPP_LINK_SW}`;
      } else {
        reply = `👔 Make a powerful impression with our professional wear:\n\n• **Power Suits**: Tailored to perfection\n• **Business Casual**: Stylish yet comfortable\n• **Meeting-Ready**: Designs that command respect\n\nDress for the success you deserve! ${WHATSAPP_LINK}`;
      }
    }
    
    // ============= CASUAL WEAR =============
    else if (lowerMsg.includes("casual") || lowerMsg.includes("everyday") || lowerMsg.includes("daily") || lowerMsg.includes("kawaida") || lowerMsg.includes("kila siku")) {
      if (isSwahili) {
        reply = `👖 Mtindo wa kila siku haupaswi kuwa wa kuchosha!\n\nMkusanyiko wetu wa kawaida unajumuisha:\n• Jeans maridadi na blauzi za kipekee\n• Nguo za starehe lakini za maridadi\n• Mavazi ya wikendi\n\nKuonekana mzuri kila siku ni rahisi ukiwa na nguo zinazokufaa. Wacha tujenge vazia lako la kawaida la kifahari! ${WHATSAPP_LINK_SW}`;
      } else {
        reply = `👖 Everyday style doesn't have to be boring!\n\nOur casual collection includes:\n• Stylish jeans with custom tops\n• Comfortable yet chic dresses\n• Weekend-ready outfits\n\nLooking good every day is easy with the right pieces. Let's build your perfect casual wardrobe! ${WHATSAPP_LINK}`;
      }
    }
    
    // ============= FABRIC ADVICE =============
    else if (lowerMsg.includes("fabric") || lowerMsg.includes("material") || lowerMsg.includes("cloth") || lowerMsg.includes("kitambaa")) {
      if (isSwahili) {
        reply = `🧵 Kitambaa cha ubora kinafanya tofauti kubwa!\n\n**Pamba**: Inapumua kwa mavazi ya kila siku\n**Hariri**: Ya kifahari kwa hafla maalum\n**Linen**: Inafaa kwa hali ya hewa ya joto\n**Velvet**: Kifahari kwa mavazi ya jioni\n\nTunatumia vitambaa vya ubora wa juu tu. Starehe yako ni muhimu kama mtindo wako! ${WHATSAPP_LINK_SW}`;
      } else {
        reply = `🧵 Quality fabric makes all the difference!\n\n**Cotton**: Breathable for everyday wear\n**Silk**: Luxurious for special occasions\n**Linen**: Perfect for hot weather\n**Velvet**: Elegant evening wear\n\nWe use only the highest quality materials. Your comfort matters as much as your style! ${WHATSAPP_LINK}`;
      }
    }
    
    // ============= ACCESSORIES =============
    else if (lowerMsg.includes("accessories") || lowerMsg.includes("jewelry") || lowerMsg.includes("bag") || lowerMsg.includes("shoe") || lowerMsg.includes("vito") || lowerMsg.includes("mkoba") || lowerMsg.includes("kiatu")) {
      if (isSwahili) {
        reply = `💎 Vifaa vinavyofaa vinakamilisha sura yako:\n\n• Vito vya kuvutia kwa mavazi rahisi\n• Mikoba ya kawaida inayolingana na kila kitu\n• Viatu vinavyosawazisha mtindo na starehe\n• Shanga za kitamaduni kwa uzuri wa kitanzania\n\nWacha tukamilishe mavazi yako kwa ukamilifu! ${WHATSAPP_LINK_SW}`;
      } else {
        reply = `💎 The right accessories complete your look:\n\n• Statement jewelry for simple outfits\n• Classic bags that match everything\n• Shoes that balance style and comfort\n• Traditional beads for cultural flair\n\nLet's accessorize your outfit to perfection! ${WHATSAPP_LINK}`;
      }
    }
    
    // ============= OCCASION PLANNING =============
    else if (lowerMsg.includes("occasion") || lowerMsg.includes("event") || lowerMsg.includes("planning") || lowerMsg.includes("tukio") || lowerMsg.includes("mpango")) {
      if (isSwahili) {
        reply = `🎯 Kila tukio linastahili mavazi bora!\n\nNiambie kuhusu tukio lako na nitakusaidia kupanga:\n• Mwonekano (rasmi, kawaida, sherehe)\n• Muda wa siku\n• Msimu na hali ya hewa\n• Mtindo wako wa kibinafsi\n\nWacha tuunde sura inayofaa kwa WAKATI wako! ${WHATSAPP_LINK_SW}`;
      } else {
        reply = `🎯 Every occasion deserves the perfect outfit!\n\nTell me about your event and I'll help you plan:\n• The vibe (formal, casual, festive)\n• Time of day\n• Season and weather\n• Your personal style\n\nLet's create a look that's perfect for YOUR moment! ${WHATSAPP_LINK}`;
      }
    }
    
    // ============= SEASONAL FASHION =============
    else if (lowerMsg.includes("season") || lowerMsg.includes("summer") || lowerMsg.includes("winter") || lowerMsg.includes("rainy") || lowerMsg.includes("msimu")) {
      if (isSwahili) {
        reply = `🌦️ Vaa kwa busara kulingana na msimu:\n\n**Msimu wa Joto**: Vitambaa vyepesi, rangi nyangavu, miundo inayopumua\n**Msimu wa Mvua**: Mavazi ya tabaka, vitambaa visivyopenyeka maji\n**Jioni za Baridi**: Koti za maridadi, mavazi ya kifahari\n\nKaa starehe huku ukionekana mzuri mwaka mzima! ${WHATSAPP_LINK_SW}`;
      } else {
        reply = `🌦️ Dress smart for the season:\n\n**Hot Season**: Light fabrics, bright colors, breathable designs\n**Rainy Season**: Layered looks, water-resistant fabrics\n**Cool Evenings**: Stylish jackets, elegant wraps\n\nStay comfortable while looking fabulous all year round! ${WHATSAPP_LINK}`;
      }
    }
    
    // ============= ALTERATIONS & FITTING =============
    else if (lowerMsg.includes("alteration") || lowerMsg.includes("repair") || lowerMsg.includes("fitting") || lowerMsg.includes("adjust") || lowerMsg.includes("rekebisha") || lowerMsg.includes("tengeneza")) {
      if (isSwahili) {
        reply = `✂️ Kubana vizuri = Kuonekana vizuri!\n\nTunatoa huduma za urekebishaji:\n• Kubadilisha ukubwa kwa kubana kamili\n• Kufupisha suruali na nguo\n• Marekebisho maalum\n• Kurejesha nguo zako pendwa\n\nTutembelee City Mall, Dar es Salaam au ${WHATSAPP_LINK_SW} kupanga miadi yako!`;
      } else {
        reply = `✂️ Perfect fit = Perfect look!\n\nWe offer professional alterations:\n• Resizing for that perfect fit\n• Hemming pants and dresses\n• Custom adjustments\n• Restoration of beloved pieces\n\nVisit us at City Mall, Dar es Salaam or ${WHATSAPP_LINK} to schedule your fitting!`;
      }
    }
    
    // ============= PRICE & BOOKING =============
    else if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("how much") || lowerMsg.includes("book") || lowerMsg.includes("appointment") || lowerMsg.includes("bei") || lowerMsg.includes("gharama") || lowerMsg.includes("ngapi") || lowerMsg.includes("nafasi")) {
      if (isSwahili) {
        reply = `💰 Mtindo mzuri ni uwekezaji kwako mwenyewe!\n\nBei hutofautiana kulingana na:\n• Ugumu wa kubuni\n• Chaguo la kitambaa\n• Maelezo maalum\n\nKwa bei sahihi na kupanga miadi yako, tafadhali wasiliana nasi moja kwa moja kwa ${WHATSAPP_LINK_SW}. Tutakupa nukuu ya kibinafsi na kupanga miadi yako!`;
      } else {
        reply = `💰 Great style is an investment in yourself!\n\nPricing varies based on:\n• Design complexity\n• Fabric choice\n• Custom details\n\nFor accurate pricing and to book your consultation, please contact us directly on ${WHATSAPP_LINK}. We'll give you a personalized quote and schedule your fitting!`;
      }
    }
    
    // ============= LOCATION & HOURS =============
    else if (lowerMsg.includes("location") || lowerMsg.includes("where") || lowerMsg.includes("address") || lowerMsg.includes("mahali") || lowerMsg.includes("wapi")) {
      if (isSwahili) {
        reply = `📍 Tunapatikana **City Mall, Dar es Salaam**!\n\n**Saa za Kufungua**: Jumatatu-Jumamosi, 9 AM - 7 PM\n**WhatsApp**: ${WHATSAPP_LINK_SW}\n\nNjoo ututembelee kuona mkusanyiko wetu wa hivi karibuni na upate ushauri wa kibinafsi wa mitindo!`;
      } else {
        reply = `📍 We're conveniently located at **City Mall, Dar es Salaam**!\n\n**Hours**: Monday-Saturday, 9 AM - 7 PM\n**WhatsApp**: ${WHATSAPP_LINK}\n\nCome visit us to see our latest collections and get personalized styling advice!`;
      }
    }
    
    // ============= OPENING HOURS =============
    else if (lowerMsg.includes("hour") || lowerMsg.includes("open") || lowerMsg.includes("time") || lowerMsg.includes("closed") || lowerMsg.includes("saa") || lowerMsg.includes("funga")) {
      if (isSwahili) {
        reply = `🕐 Tuko hapa kukuhudumia:\n\n**Jumatatu - Jumamosi**: 9:00 AM - 7:00 PM\n**Jumapili**: Tumefungwa\n\nUnahitaji usaidizi baada ya saa za kazi? Wasiliana nasi kwa ${WHATSAPP_LINK_SW} na tutakujibu haraka!`;
      } else {
        reply = `🕐 We're here for you:\n\n**Monday - Saturday**: 9:00 AM - 7:00 PM\n**Sunday**: Closed\n\nNeed after-hours assistance? Contact us on ${WHATSAPP_LINK} and we'll get back to you quickly!`;
      }
    }
    
    // ============= COMPLIMENTARY MESSAGES =============
    else if (lowerMsg.includes("beautiful") || lowerMsg.includes("nice") || lowerMsg.includes("good job") || lowerMsg.includes("thank") || lowerMsg.includes("asante") || lowerMsg.includes("vizuri") || lowerMsg.includes("kazi nzuri")) {
      if (isSwahili) {
        reply = `Asante sana! 💕 Ridhaa yako ni kila kitu kwetu. Tunafurahi kukusaidia uonekane na ujisikie vizuri. Kama ungependa kuona mkusanyiko wetu wa hivi karibuni au kupanga miadi, wasiliana nasi kwa ${WHATSAPP_LINK_SW}. Tunatarajia kuunda kitu kizuri kwako!`;
      } else {
        reply = `Thank you so much! 💕 Your satisfaction means everything to us. We're passionate about helping you look and feel amazing. If you'd like to see our latest collections or book a styling session, reach out on ${WHATSAPP_LINK}. Can't wait to create something beautiful for you!`;
      }
    }
    
    // ============= CONFIDENCE & EMPOWERMENT =============
    else if (lowerMsg.includes("confident") || lowerMsg.includes("feel good") || lowerMsg.includes("beautiful") || lowerMsg.includes("kujiamini") || lowerMsg.includes("jisikie vizuri")) {
      if (isSwahili) {
        reply = `🌟 Urembo wa kweli unatoka ndani, na mavazi yanayokufaa yanasaidia kujiamini kwako kuangaza!\n\nFalsafa yangu: Unapoonekana mzuri, unajisikia vizuri. Unapojisikia vizuri, unafanya vizuri. Wacha tupate mtindo unaokufanya UJISIKIE hawezekani!\n\nUko tayari kubadilisha vazia lako? ${WHATSAPP_LINK_SW}`;
      } else {
        reply = `🌟 True beauty comes from within, and the right outfit helps that confidence shine!\n\nMy philosophy: When you look good, you feel good. When you feel good, you do good. Let's find the style that makes YOU feel unstoppable!\n\nReady to transform your wardrobe? ${WHATSAPP_LINK}`;
      }
    }
    
    // ============= DEFAULT / GENERAL INQUIRY =============
    else {
      if (isSwahili) {
        reply = `✨ Asante kwa kuwasiliana nasi! ✨\n\nNiko hapa kukusaidia kupata mitindo inayokufanya ujiamini, uonekane mzuri, na uwe WEWE BINAFSI. Iwe unatafuta mavazi ya harusi, nguo za kitamaduni, mavazi ya kikazi, au unataka ushauri wa mitindo, nimekufunika!\n\nNiambie zaidi kuhusu unachotafuta, au wasiliana nasi moja kwa moja kwa ${WHATSAPP_LINK_SW} kwa ushauri wa kibinafsi. Wacha tuunde kitu cha kushangaza pamoja!`;
      } else {
        reply = `✨ Thank you for reaching out! ✨\n\nI'm here to help you discover fashion that makes you feel confident, beautiful, and uniquely YOU. Whether you're looking for wedding attire, traditional wear, business outfits, or just want style advice, I've got you covered!\n\nTell me more about what you're looking for, or contact us directly on ${WHATSAPP_LINK} for a personalized consultation. Let's create something amazing together!`;
      }
    }
    
    return Response.json({ reply });
    
  } catch (error) {
    return Response.json({ 
      reply: `🌟 I'm here to help you look amazing! For personalized fashion advice and styling, please reach out to us on ${WHATSAPP_LINK}. Let's create something beautiful together!` 
    });
  }
}