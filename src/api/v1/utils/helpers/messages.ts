type LanguageList = "en" | "hi" | "sa" | "ta" | "gu"
type LangagueWiseMessage = Record<LanguageList, string>

const messages: any = (lang: LanguageList = "en"): object => { 
    // Here each is Returns a JUST single message so Interface not require
    
    const login_success: LangagueWiseMessage = {
        "en": "You have logged in successfully!",
        "hi": "गलत देश कोड चुना गया!",
        "sa": "देशस्य कूटम् यथावत् न चयनितम्",
        "ta": "நாட்டின் குறியீடு தவறாக தேர்ந்தெடுக்கப்பட்டுள்ளது!",
        "gu": "ખોટો કન્ટ્રી કોડ પસંદ કર્યો છે!"
    }

    const bank_added: LangagueWiseMessage = {
        "en": "You have added bank successfully!",
        "hi": "गलत देश कोड चुना गया!",
        "sa": "देशस्य कूटम् यथावत् न चयनितम्",
        "ta": "நாட்டின் குறியீடு தவறாக தேர்ந்தெடுக்கப்பட்டுள்ளது!",
        "gu": "ખોટો કન્ટ્રી કોડ પસંદ કર્યો છે!"
    }

    const template_added: LangagueWiseMessage = {
        "en": "You have added template successfully!",
        "hi": "गलत देश कोड चुना गया!",
        "sa": "देशस्य कूटम् यथावत् न चयनितम्",
        "ta": "நாட்டின் குறியீடு தவறாக தேர்ந்தெடுக்கப்பட்டுள்ளது!",
        "gu": "ખોટો કન્ટ્રી કોડ પસંદ કર્યો છે!"
    }

    const bank_updated: LangagueWiseMessage = {
        "en": "You have updated bank information successfully!",
        "hi": "गलत देश कोड चुना गया!",
        "sa": "देशस्य कूटम् यथावत् न चयनितम्",
        "ta": "நாட்டின் குறியீடு தவறாக தேர்ந்தெடுக்கப்பட்டுள்ளது!",
        "gu": "ખોટો કન્ટ્રી કોડ પસંદ કર્યો છે!"
    }

    const user_updated: LangagueWiseMessage = {
        "en": "You have updated user information successfully!",
        "hi": "गलत देश कोड चुना गया!",
        "sa": "देशस्य कूटम् यथावत् न चयनितम्",
        "ta": "நாட்டின் குறியீடு தவறாக தேர்ந்தெடுக்கப்பட்டுள்ளது!",
        "gu": "ખોટો કન્ટ્રી કોડ પસંદ કર્યો છે!"
    }

    const bank_name_exists: LangagueWiseMessage = {
        "en": "Bank name already exists!",
        "hi": "गलत देश कोड चुना गया!",
        "sa": "देशस्य कूटम् यथावत् न चयनितम्",
        "ta": "நாட்டின் குறியீடு தவறாக தேர்ந்தெடுக்கப்பட்டுள்ளது!",
        "gu": "ખોટો કન્ટ્રી કોડ પસંદ કર્યો છે!"
    }

    const title_exists: LangagueWiseMessage = {
        "en": "Title already exists!",
        "hi": "गलत देश कोड चुना गया!",
        "sa": "देशस्य कूटम् यथावत् न चयनितम्",
        "ta": "நாட்டின் குறியீடு தவறாக தேர்ந்தெடுக்கப்பட்டுள்ளது!",
        "gu": "ખોટો કન્ટ્રી કોડ પસંદ કર્યો છે!"
    }

    const incorrect_cc: LangagueWiseMessage = {
        "en": "Incorrect country code selected!",
        "hi": "गलत देश कोड चुना गया!",
        "sa": "देशस्य कूटम् यथावत् न चयनितम्",
        "ta": "நாட்டின் குறியீடு தவறாக தேர்ந்தெடுக்கப்பட்டுள்ளது!",
        "gu": "ખોટો કન્ટ્રી કોડ પસંદ કર્યો છે!"
    }

    const otp_sent: LangagueWiseMessage = {
        "en": "OTP sent on given number",
        "hi": "दिए गए नंबर पर ओटीपी भेजा गया है",
        "sa": "प्रदत्तसंख्यायाम् ओटीपी इति प्रेषितः",
        "ta": "வழங்கப்பட்ட எண்ணிற்கு OTP அனுப்பப்பட்டவிட்டது",
        "gu": "આપેલા નંબર પર ઓટીપી મોકલ્યો છે"
    }

    const otp_resent: LangagueWiseMessage = {
        "en": "OTP sent back to the given number",
        "hi": "दिए गए नंबर पर ओटीपी फिर से भेजा गया है",
        "sa": "प्रदत्तसंख्यायाम् ओटीपी इति पुनः प्रेषितः",
        "ta": "வழங்கிய எண்ணிற்கு OTP மீண்டும் அனுப்பப்பட்டுள்ளது",
        "gu": "આપેલા નંબર પર પાછો ઓટોપી મોકલ્યો છે"
    }

    const otp_sent_email: LangagueWiseMessage = {
        "en": "OTP sent back to the given email",
        "hi": "दिए गए ईमेल पर ओटीपी फिर से भेजा गया है",
        "sa": "प्रदत्तईमेल इत्येते ओटीपी इति पुनः प्रेषितः",
        "ta": "வழங்கப்பட்ட மின்னஞ்சலுக்கு OTP மீண்டும் அனுப்பப்பட்டுவிட்டது",
        "gu": "આપેલા ઇમેઇલ પર પાછો ઓટોપી મોકલ્યો છે"
    }


    const incorrect_otp: LangagueWiseMessage = {
        "en": "Entered OTP or token is incorrect!",
        "hi": "डाला गया ओटीपी गलत है",
        "sa": "प्रविष्टितः ओटीपी इति न यथावत्",
        "ta": "உள்ளிட்ட OTP தவறானது",
        "gu": "દાખલ કરેલો ઓટીપી ખોટો છે"
    }

    const otp_not_verified: LangagueWiseMessage = {
        "en": "OTP is not verified!",
        "hi": "ओटीपी सत्यापित नहीं है!",
        "sa": "ओटीपी इति तु न सत्यापितः",
        "ta": "OTP சரிபார்க்கப்படவில்லை!",
        "gu": "ઓટીપીની ખરાઇ થઈ નથી!"
    }

    const otp_verified: LangagueWiseMessage = {
        "en": "OTP verified successfully!",
        "hi": "ओटीपी सफलतापूर्वक सत्यापित!",
        "sa": "सफलतया ओटीपी इति सत्यापितः",
        "ta": "OTP வெற்றிகரமாக சரிபார்க்கப்பட்டது!",
        "gu": "ઓટીપીની ખરાઇ સફળતાપૂર્વક થઈ છે!"
    }

    const password_changed: LangagueWiseMessage = {
        "en": "Password updated successfully. Please login with new password!",
        "hi": "पासवर्ड सफलतापूर्वक अपडेट किया गया। कृपया नए पासवर्ड से लॉगिन करें",
        "sa": "स्वसांकेतिकः सफलतया अद्यतनीकृतः। अनेन पुनः लॅागिन इति कुरु",
        "ta": "பாஸ்வேர்டு வெற்றிகரமாக புதுப்பிக்கப்பட்டது. புதிய பாஸ்வேர்டுடன் உள்நுழையவும்",
        "gu": "પાસવર્ડ સફળતાપૂર્વક અપડેટ કરવામાં આવ્યો છે. કૃપા કરીને નવા પાસવર્ડ સાથે લોગિન કરો"
    }

    const profile_changed: LangagueWiseMessage = {
        "en": "Profile updated successfully.",
        "hi": "प्रोफ़ाइल को सफलतापूर्वक अपडेट किया गया",
        "sa": "परिचयः सफलतया अद्यतनीकरणम्",
        "ta": "சுயவிவர வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
        "gu": "પ્રોફાઇલ સફળતાપૂર્વક અપડેટ થયું છે"
    }

    const status_changed: LangagueWiseMessage = {
        "en": "Status updated successfully.",
        "hi": "स्थिति (स्टेटस) सफलतापूर्वक अपडेट की गई",
        "sa": "स्थितेः सफलतया अद्यतनीकरणम्",
        "ta": "நிலை வெற்றிகரமாகப் புதுப்பிக்கப்பட்டது",
        "gu": "સ્ટેટસ સફળતાપૂર્વક અપડેટ થયું છે"
    }

    const privacy_changed: LangagueWiseMessage = {
        "en": "Privacy updated successfully.",
        "hi": "गोपनीयता सफलतापूर्वक अपडेट की गई।",
        "sa": "निजतायाः अद्यतनीकृतम् सफलम् ",
        "ta": "தனியுரிமை வெற்றிகரமாக புதுப்பிக்கப்பட்டது.",
        "gu": "ગોપનીયતા સફળતાપૂર્વક અપડેટ થઈ છે."
    }

    const privacy_and_permission: LangagueWiseMessage = {
        "en": "Privacy and permission.",
        "hi": "गोपनीयता और अनुमति",
        "sa": "निजता एवं अनुमोदनः ",
        "ta": "தனியுரிமை மற்றும் அனுமதி",
        "gu": "ગોપનીયતા અને મંજૂરી"
    }

    const incorrect_password: LangagueWiseMessage = {
        "en": "Entered password is incorrect!",
        "hi": "डाला गया पासवर्ड गलत है",
        "sa": "प्रविष्टम् स्वपदम् न यथावत्",
        "ta": "உள்ளிட்ட பாஸ்வேர்டு தவறானது",
        "gu": "દાખલ કરેલો પાસવર્ડ ખોટો છે"
    }

    const incorrect_current_password: LangagueWiseMessage = {
        "en": "Entered current password is incorrect!",
        "hi": "डाला गया मौजूदा पासवर्ड गलत है",
        "sa": "विद्यमानस्य स्वपदस्य प्रविष्टिः न यथावत्",
        "ta": "உள்ளிடப்பட்ட தற்போதைய பாஸ்வேர்டு தவறானது",
        "gu": "દાખલ કરેલો હાલનો પાસવર્ડ ખોટો છે"
    }


    const incorrect_mobile: LangagueWiseMessage = {
        "en": "User record not found with given details!",
        "hi": "दिए गए विवरण वाले उपयोगकर्ता का रिकॉर्ड नहीं मिला",
        "sa": "प्रदत्तविवरणेन सह उपयोगकर्तायाः विवरणम् न सुमेलीकृतम््",
        "ta": "கொடுக்கப்பட்ட விவரங்களின் கீழ் பயனர் பதிவு காணப்படவில்லை!",
        "gu": "યુઝરનો રેકોર્ડ આપેલી વિગતો સાથે મળી આવ્યો નથી"
    }

    const email_not_verified: LangagueWiseMessage = {
        "en": "Email address is not verified!",
        "hi": "ईमेल पता सत्यापित नहीं है",
        "sa": "ई मेल नामग्रामम् तु न सत्यापितम्",
        "ta": "மின்னஞ்சல் முகவரி சரிபார்க்கப்படவில்லை",
        "gu": "ઇમેઇલ એડ્રેસની ખરાઇ થઈ નથી"
    }

    const email_not_found: LangagueWiseMessage = {
        "en": "You are not registered with us, please register yourself first!",
        "hi": "ईमेल पता सत्यापित नहीं है",
        "sa": "ई मेल नामग्रामम् तु न सत्यापितम्",
        "ta": "மின்னஞ்சல் முகவரி சரிபார்க்கப்படவில்லை",
        "gu": "ઇમેઇલ એડ્રેસની ખરાઇ થઈ નથી"
    }

    const wrong_email: LangagueWiseMessage = {
        "en": "Email address is not found!",
        "hi": "ईमेल पता नहीं मिला",
        "sa": "ई मेल नामग्रामम् तु अनुपलब्धम्",
        "ta": "மின்னஞ்சல் முகவரி காணப்படவில்லை",
        "gu": "ઇમેઇલ એડ્રેસ મળ્યું નથી"
    }

    const something_went_wrong: LangagueWiseMessage = {
        "en": "Something went wrong or Bad request!",
        "hi": "ईमेल पता नहीं मिला",
        "sa": "ई मेल नामग्रामम् तु अनुपलब्धम्",
        "ta": "மின்னஞ்சல் முகவரி காணப்படவில்லை",
        "gu": "ઇમેઇલ એડ્રેસ મળ્યું નથી"
    }

    const mobile_exist: LangagueWiseMessage = {
        "en": "Entered mobile number already registered, Please change and try again!",
        "hi": "दर्ज किया गया मोबाइल नंबर पहले से पंजीकृत है, कृपया इसे बदलें और फिर से प्रयास करें",
        "sa": "पंजीकृतमोबाइलसंख्याम् प्रवेशय। कृपया परिवर्तनम् प्रयासम् च कुरु",
        "ta": "உள்ளிடப்பட்ட மொபைல் எண் ஏற்கனவே பதிவு செய்யப்பட்டுவிட்டது. வேறு எண் பயன்படுத்தி மீண்டும் முயற்சிக்கவும்",
        "gu": "દાખલ કરેલો મોબાઇલ નંબર અગાઉથી નોંધેલો છે, કૃપા કરી બદલો અને ફરી પ્રયત્ન કરો"
    }

    const email_exist: LangagueWiseMessage = {
        "en": "Email already registered!",
        "hi": "ईमेल पहले से पंजीकृत है, कृपया इसे बदलें और फिर से प्रयास करें",
        "sa": "ई मेल नामग्रामम् तु प्राक् एव पंजीकृतम्। परिवर्तनम् प्रयासम् च कुरु",
        "ta": "இமெயில் ஏற்கனவே பதிவு செய்யப்பட்டுவிட்டது. வஏறு இமெயில் பயன்படுத்தி மீண்டும் முயற்சிக்கவும்",
        "gu": "ઇમેઇલ અગાઉથી નોંધેલું છે, કૃપા કરી બદલો અને ફરી પ્રયત્ન કરો"
    }

    const mobile_not_verified: LangagueWiseMessage = {
        "en": "Mobile Number is not verified!",
        "hi": "मोबाइल नंबर सत्यापित नहीं है",
        "sa": "मोबाइलसंख्या तु न सत्यापिता",
        "ta": "மொபைல் எண் சரிபார்க்கப்படவில்லை",
        "gu": "મોબાઇલ નંબરની ખરાઇ થઈ નથી"
    }

    const complete_profile: LangagueWiseMessage = {
        "en": "User registered successfully!",
        "hi": "उपयोगकर्ता सफलतापूर्वक पंजीकृत हो गया",
        "sa": "उपयोगकर्तायाः पंजीकरणम् सफलम्",
        "ta": "பயனர் வெற்றிகரமாக பதிவு செய்யப்பட்டுவிட்டார்",
        "gu": "યુઝરની સફળતાપૂર્વક નોંધણી થઈ છે"
    }

    const recipe_added: LangagueWiseMessage = {
        "en": "Recipe added successfully!",
        "hi": "रेसिपी सफलतापूर्वक जोड़ी गई",
        "sa": "पाकविधिः सफलतया संकलिता",
        "ta": "சமையல் செய்முறை வெற்றிகரமாகச் சேர்க்கப்பட்டதுு",
        "gu": "વાનગી સફળતાપૂર્વક ઉમેરવામાં આવી છે"
    }

    const recipe_updated: LangagueWiseMessage = {
        "en": "Recipe updated successfully!",
        "hi": "रेसिपी को सफलतापूर्वक अपडेट किया गया",
        "sa": "पाकविधिः सफलतया अद्यतनीकृताः",
        "ta": "சமையல் செய்முறை வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
        "gu": "વાનગી સફળતાપૂર્વક અપડેટ થઈ છે"
    }

    const recipe_deleted: LangagueWiseMessage = {
        "en": "Recipe deleted successfully!",
        "hi": "रेसिपी सफलतापूर्वक हटाई गई",
        "sa": "पाकविधिः सफलतया उच्छेदिता",
        "ta": "சமையல் செய்முறை வெற்றிகரமாக நீக்கப்பட்டது",
        "gu": "વાનગી સફળતાપૂર્વક ડિલિટ કરવામાં આવી છે"
    }

    const recipe_comments_added: LangagueWiseMessage = {
        "en": "Comments on recipe saved successfully!",
        "hi": "रेसिपी पर आई टिप्पणियां (कमेंट) सफलतापूर्वक सेव की गईं",
        "sa": "पाकविधेः टिप्पणी सफलतापूर्वकसंरक्षिता",
        "ta": "சமையல் செய்முறை பற்றிய கருத்துகள் வெற்றிகரமாக சேமிக்கப்பட்டது",
        "gu": "વાનગી પર કરેલી ટિપ્પણીઓ સફળતાપૂર્વક સેવ થઈ છે"
    }

    const recipe_comments_updated: LangagueWiseMessage = {
        "en": "Comments on recipe updated successfully!",
        "hi": "रेसिपी पर आई टिप्पणियां (कमेंट) सफलतापूर्वक अपडेट की गईं",
        "sa": "पाकविधेः टिप्पणी सफलतया अद्यतनीकृता",
        "ta": "சமையல் செய்முறை குறித்த கருத்துகள் வெற்றிகரமாகப் புதுப்பிக்கப்பட்டன",
        "gu": "વાનગી પર કરેલી ટિપ્પણીઓ સફળતાપૂર્વક અપડેટ થઈ છે"
    }

    const recipe_comments_deleted: LangagueWiseMessage = {
        "en": "Comments on recipe deleted successfully!",
        "hi": "रेसिपी पर आई टिप्पणियां (कमेंट) सफलतापूर्वक हटाई गईं",
        "sa": "पाकविधेः टिप्पणी सफलतापूर्वक उच्छेदिता",
        "ta": "சமையல் செய்முறை குறித்த கருத்துக்கள் வெற்றிகரமாக நீக்கப்பட்டது",
        "gu": "વાનગી પર કરેલી ટિપ્પણીઓ સફળતાપૂર્વક ડિલિટ થઈ છે"
    }

    const recipe_like_added: LangagueWiseMessage = {
        "en": "Recipe liked!",
        "hi": "रेसिपी पसंद/लाइक की गई",
        "sa": "पाकविधिः अनुशंसिता",
        "ta": "செய்முறை பிடித்திருப்பவர்கள்",
        "gu": "વાનગી ગમી છે"
    }

    const like_updated_on_recipe: LangagueWiseMessage = {
        "en": "Like on recipe updated!",
        "hi": "रेसिपी पर आई पसंद/लाइक को अपडेट किया गया",
        "sa": "अद्यतनीकृता पाकविधिः अनुशंसा",
        "ta": "செய்முறை பிடித்திருப்பவர்கள்",
        "gu": "વાનગી ગમી છે"
    }
    const about_changed: LangagueWiseMessage = {
        "en": "About us updated!",
        "hi": "हमारा परिचय अपडेट किया गया",
        "sa": "अस्माकम् विषये अद्यतनीकृतः",
        "ta": "எங்களைப் பற்றி பகுதி புதுப்பிக்கப்பட்டது",
        "gu": "અમારા વિશે અપડેટ થયું છે"
    }

    const album_details: LangagueWiseMessage = {
        "en": "Album details",
        "hi": "एल्बम विवरण",
        "sa": "संकलिकायाः विवरणम्",
        "ta": "ஆல்பம் விவரங்கள்",
        "gu": "આલ્બમની વિગતો"
    }

    const privacy_policy_changed: LangagueWiseMessage = {
        "en": "Privacy policy updated!",
        "hi": "गोपनीयता नीति अपडेट की गई!",
        "sa": "निजतानीतिः अद्यतनीकृता",
        "ta": "தனியுரிமைக் கொள்கை பகுதி புதுப்பிக்கப்பட்டது!!",
        "gu": "ગોપનીયતા નીતિ અપડેટ થઈ છે!"
    }

    const term_and_conditions_changed: LangagueWiseMessage = {
        "en": "Term and conditions updated!",
        "hi": "नियम और शर्तें अपडेट की गईं",
        "sa": "निबन्धनः नियमः च अद्यतनीकृतः",
        "ta": "விதிமுறைகள் மற்றும் நிபந்தனைகள் புதுப்பிக்கப்பட்டன",
        "gu": "નિયમો અને શરતો અપડેટ થયા છે"
    }

    const FAQs_changed: LangagueWiseMessage = {
        "en": "FAQs updated!",
        "hi": "अक्सर पूछे जाने वाले प्रश्न अपडेट किए गए",
        "sa": "प्रायः पृच्छितानि प्रश्नानि अद्यतनीकृतानि",
        "ta": "அடிக்கடி கேட்கப்படும் கேள்விகள் புதுப்பிக்கப்பட்டன",
        "gu": "વારંવાર પૂછવામાં આવતા પ્રશ્નો અપડેટ થયા છે"
    }

    const FAQs_list: LangagueWiseMessage = {
        "en": "FAQs list!",
        "hi": "अक्सर पूछे जाने वाले प्रश्नों की सूची",
        "sa": "प्रायः पृच्छितानाम् प्रश्नानाम् सूचिः",
        "ta": "அடிக்கடி கேட்கப்படும் கேள்விகள் பட்டியல்",
        "gu": "વારંવાર પૂછવામાં આવતા પ્રશ્નોની યાદી"
    }

    const like_added_on_comment: LangagueWiseMessage = {
        "en": "Comment liked!",
        "hi": "कमेंट/टिप्पणी को पसंद/लाइक किया गया",
        "sa": "टिप्पणी अनुशंसिता ",
        "ta": "லைக் செய்யப்பட்ட கருத்துகள்",
        "gu": "ટિપ્પણી પસંદ કરવામાં આવી છે"
    }

    const like_added_on_memory: LangagueWiseMessage = {
        "en": "Memory liked!",
        "hi": "मेमोरी को पसंद/लाइक किया गया",
        "sa": "स्मृतिः अनुशंसिता ",
        "ta": "லைக் செய்யப்பட்ட நினைவுகள்",
        "gu": "મેમરી પસંદ કરવામાં આવી છે"
    }


    const like_updated_on_memory: LangagueWiseMessage = {
        "en": "Like on memory updated!",
        "hi": "मेमोरी पर आई पसंद/लाइक को अपडेट किया गया",
        "sa": "अद्यतनीकृता स्मृत्याय अनुशंसा",
        "ta": "நினைவுகள் மீதான லைக் புதுப்பிக்கப்பட்டது",
        "gu": "મેમરી પર પસંદ અપડેટ થઈ છે"
    }

    const like_on_comment_change: LangagueWiseMessage = {
        "en": "like on comment changed!",
        "hi": "मेमोरी पर आई पसंद/लाइक को बदला गया",
        "sa": "टिप्पणी अनुशंसा परिवर्तिता",
        "ta": "கருத்துகள் மீதான லைக் மாற்றி அமைக்கப்பட்டது",
        "gu": "ટિપ્પણી પર પસંદ બદલવામાં આવી છે"
    }

    const like_already_added_on_comment: LangagueWiseMessage = {
        "en": "Comment already liked by this user!",
        "hi": "इस उपयोगकर्ता द्वारा टिप्पणी/कमेंट को पहले से ही लाइक/पसंद किया गया है",
        "sa": "अनेन कर्त्रा टिप्पणी तु पूर्वमेव अनुशंसिता",
        "ta": "இந்த பயனருக்கு ஏற்கனவே கருத்து பிடித்திருக்கிறது",
        "gu": "આ યુઝર દ્વારા ટિપ્પણી અગાઉથી પસંદ કરવામાં આવી છે"
    }

    const like_already_added_on_recipe: LangagueWiseMessage = {
        "en": "Recipe already liked by this user!",
        "hi": "इस उपयोगकर्ता द्वारा रेसिपी को पहले से ही लाइक/पसंद किया गया है",
        "sa": "अनेन कर्त्रा पाकविधिः तु पूर्वमेव अनुशंसिता",
        "ta": "இந்த பயனர் ஏற்கனவே சமையற்செய்முறையை விரும்பியுள்ளார்!",
        "gu": "આ યુઝર દ્વારા વાનગી અગાઉથી પસંદ કરવામાં આવી છે"
    }

    const recipe_privacy_changed: LangagueWiseMessage = {
        "en": "Recipe privacy changed successfully!",
        "hi": "रेसिपी की गोपनीयता सफलतापूर्वक बदली गई",
        "sa": "पाकविधेः निजता सफलतया परिवर्तिता",
        "ta": "சமையல் செய்முறை தனியுரிமை வெற்றிகரமாக மாற்றப்பட்டது",
        "gu": "વાનગીની ગોપનીયતા સફળતાપૂર્વક બદલાઇ છે"
    }

    const recipe_list: LangagueWiseMessage = {
        "en": "Recipe list!",
        "hi": "रेसिपी सूची",
        "sa": "पाकविधेः सूचि",
        "ta": "சமையற்குறிப்பு பட்டியல்",
        "gu": "વાનગીની યાદી"
    }

    const album_list = {
        "en": "Album list!",
        "hi": "एल्बम सूची",
        "sa": "संकलिकायाः सूचिः",
        "ta": "ஆல்பம் பட்டியல்",
        "gu": "આલ્બમની યાદી"
    }


    const like_list = {
        "en": "Like list!",
        "hi": "पसंद/लाइक सूची",
        "sa": "अनुशंसा सूचिः",
        "ta": "லைக் செய்யப்பட்ட பட்டியல்",
        "gu": "પસંદની યાદી"
    }

    const comment_list = {
        "en": "Comment list!",
        "hi": "टिप्पणी/कमेंट सूची",
        "sa": "टिप्पणी इत्यस्य सूचिः",
        "ta": "கருத்துகள் வழங்கப்பட்ட பட்டியல்",
        "gu": "ટિપ્પણીની યાદી"
    }

    const user_list: LangagueWiseMessage = {
        "en": "User list!",
        "hi": "उपयोगकर्ता सूची",
        "sa": "उपयोगकर्तृणाम् सूचिः",
        "ta": "பயனர் பட்டியல்",
        "gu": "યુઝરની યાદી"
    }

    const user_logs: LangagueWiseMessage = {
        "en": "User logs",
        "hi": "उपयोगकर्ता लॉग",
        "sa": "उपयोगकर्तुः लॅाग इति",
        "ta": "பயனர் பதிவுகள்",
        "gu": "યુઝર લોગ્સ"
    }

    const user_details: LangagueWiseMessage = {
        "en": "User details",
        "hi": "उपयोगकर्ता विवरण",
        "sa": "उपयोगकर्तुः विवरणम् ",
        "ta": "பயனர் விவரங்கள்",
        "gu": "યુઝરની વિગતો"
    }

    const user_deleted: LangagueWiseMessage = {
        "en": "User deleted!",
        "hi": "उपयोगकर्ता को हटाया गया",
        "sa": "उपयोगकर्ता उच्छेदितः",
        "ta": "பயனர் நீக்கப்பட்டார்",
        "gu": "યુઝર ડિલિટ કરવામાં આવ્યા છે"
    }

    const profile_not_complete: LangagueWiseMessage = {
        "en": "Your profile not completed, Please complete it!",
        "hi": "आपकी प्रोफ़ाइल पूरी नहीं हुई है, कृपया इसे पूरा करें",
        "sa": "तव परिचयः अपूर्णः, कृपया पूर्णम् कुरु",
        "ta": "உங்கள் சுயவிவரம் நிறைவடையவில்லை, தயவுசெய்து அதை பூர்த்தி செய்து முடிக்கவும்",
        "gu": "તમારી પ્રોફાઇલ પૂર્ણ થઈ નથી, કૃપા કરીને તેને પૂર્ણ કરો"
    }

    const social_id_missing: LangagueWiseMessage = {
        "en": "social Provider id is missing!",
        "hi": "सोसल प्रोवाइडर आईडी लापता है",
        "sa": "सामाजिक प्रदातायाः आईडी इति अनुपलब्धः",
        "ta": "சமூக வழங்குநர் ஐடி இல்லை",
        "gu": "સામાજિક પ્રદાતા આઇડી નથી"
    }

    const exists = function (name: string): LangagueWiseMessage {
        return {
            "en": `${name} Not found with given details!`,
            "hi": `दिए गए विवरण वाला ${name} नहीं मिला`,
            "sa": `प्रदत्तेन विवरणेन सह ${name} तु न प्राप्तः`,
            "ta": `${name} கொடுக்கப்பட்ட விளக்கத்தின் கீழ் காணப்படவில்லை`,
            "gu": `${name} આપેલી વિગતો સાથે મળી આવ્યા નથી`
        }
    }
    const unique = function (name: string): LangagueWiseMessage {
        return {
            "en": `${name} is already taken!`,
            "hi": `यह ${name} पहले ही ले लिया गया है`,
            "sa": `${name} पूर्वमेव गृहीतः`,
            "ta": `${name} ஏற்கனவே பயன்படுத்தப்பட்டுள்ளது`,
            "gu": `${name} અગાઉથી લેવામાં આવ્યું છે`
        }
    }

    const maxLength = function (name: string): LangagueWiseMessage {
        return {
            "en": `${name} exceeded the character limit!`,
            "hi": `${name} वर्ण सीमा को पार कर गया`,
            "sa": `${name} नियत वर्णसंख्यासीमायाः अतिक्रमणम् अकरोत्`,
            "ta": `${name} ஏற்கனவே பயன்படுத்தப்பட்டுள்ளது`,
            "gu": `${name} ஏற்கனவே பயன்படுத்தப்பட்டுள்ளது`
        }
    }

    const removed_bank: LangagueWiseMessage = {
        "en": `bank removed successfully!`,
        "hi": `वर्ण सीमा को पार कर गया`,
        "sa": `नियत वर्णसंख्यासीमायाः अतिक्रमणम् अकरोत्`,
        "ta": `ஏற்கனவே பயன்படுத்தப்பட்டுள்ளது`,
        "gu": `ஏற்கனவே பயன்படுத்தப்பட்டுள்ளது`
    }

    const required = function (varr: string): LangagueWiseMessage {
        return {
            "en": `${varr} is required!`,
            "hi": `${varr} देना जरूरी है `,
            "sa": `${varr} तु आवश्यकः`,
            "ta": `${varr} அவசியம் தேவை`,
            "gu": `${varr} આવશ્યકતા નથી`
        }
    }

    const email = function (name: string): LangagueWiseMessage {
        return {
            "en": `The email must be a valid email address.`,
            "hi": `ईमेल एक मान्य ईमेल पता होना चाहिए।`,
            "sa": `${name} तु आवश्यकः`,
            "ta": `${name} அவசியம் தேவை`,
            "gu": `${name} આવશ્યકતા નથી`
        }
    }

    const invalid_token: LangagueWiseMessage = {
        "en": "Invalid token",
        "hi": "अमान्य टोकन",
        "sa": "अयथावत् टोकेन इति",
        "ta": "செல்லுபடியாகாத டோக்கன்",
        "gu": "અમાન્ય ટોકન"
    }

    const token_required: LangagueWiseMessage = {
        "en": "User token is required.",
        "hi": "अमान्य टोकन",
        "sa": "अयथावत् टोकेन इति",
        "ta": "செல்லுபடியாகாத டோக்கன்",
        "gu": "અમાન્ય ટોકન"
    }

    const invalid_api_key: LangagueWiseMessage = {
        "en": "Invalid api key!",
        "hi": "अमान्य टोकन",
        "sa": "अयथावत् टोकेन इति",
        "ta": "செல்லுபடியாகாத டோக்கன்",
        "gu": "અમાન્ય ટોકન"
    }

    const ac_deactivated: LangagueWiseMessage = {
        "en": "Your account is deactivated by admin!",
        "hi": "आपके खाते/अकाउंट को व्यवस्थापक द्वारा निष्क्रिय कर दिया गया है",
        "sa": "प्रबन्धकेन तव खाता निष्क्रियकृता",
        "ta": "உங்கள் அக்கவுண்ட் நிர்வாகியால் முடக்கப்பட்டுவிட்டது",
        "gu": "તમારું એકાઉન્ટ એડમિન દ્વારા ડિએક્ટિવેટ કરવામાં આવ્યું છે"
    }

    const unauthorized: LangagueWiseMessage = {
        "en": "You do not have permission to make changes.",
        "hi": "आपको बदलाव करने की अनुमति नहीं है",
        "sa": "परिवर्तनकर्तुम् त्वम् अनुज्ञाप्रदः न असि",
        "ta": "மாற்றங்களைச் செய்ய உங்களுக்கு அனுமதி இல்லை",
        "gu": "તમે ફેરફાર કરવાની મંજૂરી ધરાવતા નથી"
    }

    const album_added = {
        "en": "Album created successfully!",
        "hi": "एल्बम सफलतापूर्वक बनाया गया",
        "sa": "सफलतया संकलिका सृजिता",
        "ta": "ஆல்பம் வெற்றிகரமாக உருவாக்கப்பட்டுவிட்டது",
        "gu": "આલ્બમ સફળતાપૂર્વક બનાવવામાં આવ્યો છે"
    }
    const memory_added = {
        "en": "Memory added successfully!",
        "hi": "मेमोरी सफलतापूर्वक जोड़ी गई",
        "sa": "सफलतया स्मृतिः संकलिता",
        "ta": "நினைவுகள் வெற்றிகரமாகச் சேர்க்கப்பட்டது",
        "gu": "મેમરી સફળતાપૂર્વક ઉમેરવામાં આવી છે"
    }

    const memory_updated = {
        "en": "Memory updated successfully!",
        "hi": "मेमोरी सफलतापूर्वक अपडेट की गई",
        "sa": "सफलतया स्मृतिः अद्यतनीकृता",
        "ta": "நினைவுகள் வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
        "gu": "મેમરી સફળતાપૂર્વક અપડેટ કરવામાં આવી છે"
    }

    const album_deleted = {
        "en": "Album deleted successfully!",
        "hi": "एल्बम सफलतापूर्वक हटाया गया",
        "sa": "संकलिका सफलतया उच्छेदिता",
        "ta": "ஆல்பம் வெற்றிகரமாக நீக்கப்பட்டது",
        "gu": "આલ્બમ સફળતાપૂર્વક ડિલિટ કરવામાં આવ્યો છે"
    }

    const memory_deleted = {
        "en": "Memory deleted successfully!",
        "hi": "मेमोरी सफलतापूर्वक हटाई गई",
        "sa": "स्मृतिः सफलतया उच्छेदिता",
        "ta": "நினைவுகள் வெற்றிகரமாக நீக்கப்பட்டது",
        "gu": "મેમરી સફળતાપૂર્વક ડિલિટ કરવામાં આવી છે"
    }

    const memory_comments_added = {
        "en": "Comments on memory saved successfully!",
        "hi": "मेमोरी पर आईं टिप्पणियां (कमेंट) सफलतापूर्वक सहेजी गईं",
        "sa": "स्मृतिषु टिप्पणी सफलतया संरक्षिता",
        "ta": "நினைவுகள் பற்றிய கருத்துகள் வெற்றிகரமாக சேமிக்கப்பட்டது",
        "gu": "મેમરી પરની ટિપ્પણીઓ સફળતાપૂર્વક સેવ થઈ છે"
    }

    const memory_comments_updated = {
        "en": "Comments on memory updated successfully!",
        "hi": "मेमोरी पर आईं टिप्पणियां (कमेंट) सफलतापूर्वक अपडेट की गईं",
        "sa": "स्मृतिषु टिप्पणी सफलतया अद्यतनीकृता",
        "ta": "நினைவுகள் பற்றிய கருத்துகள் வெற்றிகரமாகப் புதுப்பிக்கப்பட்டன",
        "gu": "મેમરી પરની ટિપ્પણીઓ સફળતાપૂર્વક અપડેટ થઈ છે"
    }

    const memory_comments_deleted = {
        "en": "Comments on memory deleted successfully!",
        "hi": "मेमोरी पर आईं टिप्पणियां (कमेंट) सफलतापूर्वक हटाई गईं",
        "sa": "स्मृतिषु टिप्पणी सफलतया  उच्छेदिता",
        "ta": "நினைவுகள் பற்றிய கருத்துகள் வெற்றிகரமாக நீக்கப்பட்டன",
        "gu": "મેમરી પરની ટિપ્પણીઓ સફળતાપૂર્વક ડિલિટ થઈ છે"
    }

    const memory_like_added = {
        "en": "Memory liked!",
        "hi": "मेमोरी को पसंद/लाइक किया गया",
        "sa": "स्मृतिः अनुशंसिता ",
        "ta": "லைக் செய்யப்பட்ட நினைவுகள்",
        "gu": "મેમરી પસંદ કરવામાં આવી છે"
    }
    const memories_list = {
        "en": "Memory list!",
        "hi": "मेमोरी सूची",
        "sa": "स्मृत्याः सूचिः",
        "ta": "நினைவுகள் பட்டியல்",
        "gu": "મેમરીની યાદી"
    }

    const user_logout: LangagueWiseMessage = {
        "en": "User logout successfully!",
        "hi": "उपयोगकर्ता सफलतापूर्वक लॉगआउट",
        "sa": "उपयोगकर्ता सफलतया लॅागआउट इति कृतवान्",
        "ta": "பயனர் வெற்றிகரமாக வெளியேற்றப்பட்டார்",
        "gu": "યુઝરે સફળતાપૂર્વક લોગાઉટ કર્યું છે"
    }

    const wish_added = {
        "en": "Wish added successfully!",
        "hi": "शुभकामना (विश) सफलतापूर्वक जोड़ी गई",
        "sa": "सफलतया शुभेच्छा संकलिता",
        "ta": "விருப்பம் வெற்றிகரமாக சேர்க்கப்பட்டுவிட்டது",
        "gu": "વિશ સફળતાપૂર્વક ઉમેરવામાં આવી છે"
    }
    const wish_updated = {
        "en": "Wish updated successfully!",
        "hi": "शुभकामना (विश) सफलतापूर्वक अपडेट की गई",
        "sa": "सफलतया शुभेच्छा अद्यतनीकृता",
        "ta": "விருப்பம் வெற்றிகரமாக புதுப்பிக்கப்பட்டுவிட்டது",
        "gu": "વિશ સફળતાપૂર્વક અપડેટ કરવામાં આવી છે"
    }
    const wish_deleted = {
        "en": "Wish deleted successfully!",
        "hi": "शुभकामना (विश) सफलतापूर्वक हटाई गई",
        "sa": "सफलतया शुभेच्छा उच्छेदिता",
        "ta": "விருப்பம் வெற்றிகரமாக நீக்கப்பட்டுவிட்டது",
        "gu": "વિશ સફળતાપૂર્વક ડિલિટ કરવામાં આવી છે"
    }
    const wish_list = {
        "en": "Wish list",
        "hi": "शुभकामना (विश) सूची",
        "sa": "शुभेच्छा सूचिः",
        "ta": "விருப்பப்பட்டியல்",
        "gu": "વિશની યાદી"
    }


    //--Kahani message -->
    const kahani_added = {
        "en": "Kahani added successfully!",
        "hi": "कहानी को सफलतापूर्वक जोड़ा गया",
        "sa": "सफलतया कथा संकलिता",
        "ta": "கதை வெற்றிகரமாகச் சேர்க்கப்பட்டுவிட்டது",
        "gu": "કહાની સફળતાપૂર્વક ઉમેરવામાં આવી છે"
    }

    const kahani_comments_added = {
        "en": "Comments on kahani saved successfully!",
        "hi": "कहानी पर आईं टिप्पणियां (कमेंट) सफलतापूर्वक सहेजी गईंा",
        "sa": "कथासु टिप्पणी तु सफलतया सुरक्षिताा",
        "ta": "கதை பற்றிய கருத்துகள் வெற்றிகரமாகச் சேமிக்கப்பட்டனு",
        "gu": "કહાની પરની ટિપ્પણીઓ સફળતાપૂર્વક સેવ થઈ છેે"
    }

    const kahani_comments_updated = {
        "en": "Comments on kahani updated successfully!",
        "hi": "कहानी पर आईं टिप्पणियां (कमेंट) सफलतापूर्वक अपडेट की गईं",
        "sa": "कथासु टिप्पणी तु सफलतया अद्यतनीकृता",
        "ta": "கதை பற்றிய கருத்துகள் வெற்றிகரமாகப் புதுப்பிக்கப்பட்டன",
        "gu": "કહાની પરની ટિપ્પણીઓ સફળતાપૂર્વક અપડેટ થઈ છે"
    }

    const kahani_comments_deleted = {
        "en": "Comments on kahani deleted successfully!",
        "hi": "कहानी पर आईं टिप्पणियां (कमेंट) सफलतापूर्वक हटाई गईं",
        "sa": "कथासु टिप्पणी तु सफलतया उच्छेदिता",
        "ta": "கதை பற்றிய கருத்துகள் வெற்றிகரமாக நீக்கப்பட்டன",
        "gu": "કહાની પરની ટિપ્પણીઓ સફળતાપૂર્વક ડિલિટ થઈ છે"
    }

    const kahani_like_added = {
        "en": "Kahani liked!",
        "hi": "कहानी लाइक/पसंद की गई",
        "sa": "कथा अनुशंसिता",
        "ta": "கதை விரும்பியுள்ளீர்கள்",
        "gu": "કહાની પસંદ કરવામાં આવી છે"
    }

    const like_updated_on_kahani = {
        "en": "Like on kahani updated!",
        "hi": "कहानी पर आई पसंद/लाइक अपडेट की गईं",
        "sa": "कथा सम्बन्धी अनुशंसा अद्यतनीकृता",
        "ta": "கதை மீதான லைக் புதுப்பிக்கப்பட்டது",
        "gu": "કહાની પર પસંદ અપડેટ થઈ છે"
    }

    const kahani_updated = {
        "en": "Kahani updated successfully!",
        "hi": "कहानी सफलतापूर्वक अपडेट की गई",
        "sa": "कथासु टिप्पणी तु सफलतया अद्यतनीकृता",
        "ta": "கதை வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
        "gu": "કહાની સફળતાપૂર્વક અપડેટ થઈ છે"
    }

    const kahani_privacy_changed = {
        "en": "Kahani privacy changed successfully!",
        "hi": "कहानी की गोपनीयता सफलतापूर्वक बदल दी गई",
        "sa": "कथासु निजता तु सफलतया परिवर्तिता",
        "ta": "கதை தனியுரிமை வெற்றிகரமாக மாற்றப்பட்டது",
        "gu": "કહાની ગોપનીયતા સફળતાપૂર્વક બદલવામાં આવી છે"
    }

    const kahani_list = {
        "en": "Kahani list!",
        "hi": "कहानियों की सूची",
        "sa": "कथा सूचिः",
        "ta": "கதை பட்டியல்",
        "gu": "કહાનીની યાદી"
    }

    const kahani_deleted = {
        "en": "Kahani deleted successfully!",
        "hi": "कहानी सफलतापूर्वक हटाई गई",
        "sa": "कथा सफलतया उच्छेदिता",
        "ta": "கதை வெற்றிகரமாக நீக்கப்பட்டது",
        "gu": "કહાની સફળતાપૂર્વક ડિલિટ થઈ છે"
    }

    // Alarm message

    const alarm_added = {
        "en": "Alarm added successfully!",
        "hi": "अलार्म सफलतापूर्वक जोड़ा गया",
        "sa": "घंटानादः सफलतया संकलितः",
        "ta": "அலாரம் வெற்றிகரமாகச் சேர்க்கப்பட்டது",
        "gu": "એલાર્મ સફળતાપૂર્વક ઉમેરવામાં આવ્યું છે"
    }
    const alarm_updated = {
        "en": "Alarm updated successfully!",
        "hi": "अलार्म सफलतापूर्वक अपडेट किया गया",
        "sa": "घंटानादः सफलतया अद्यतनीकृतः",
        "ta": "அலாரம் வெற்றிகரமாகப் புதுப்பிக்கப்பட்டது",
        "gu": "એલાર્મ સફળતાપૂર્વક અપડેટ થયું છે"
    }
    const alarm_deleted = {
        "en": "Alarm deleted successfully!",
        "hi": "अलार्म सफलतापूर्वक हटाया गया",
        "sa": "घंटानादः सफलतया उच्छेदितः",
        "ta": "அலாரம் வெற்றிகரமாக நீக்கப்பட்டது",
        "gu": "એલાર્મ સફળતાપૂર્વક ડિલિટ થયું છે"
    }
    const alarm_list = {
        "en": "Alarm list",
        "hi": "अलार्म सूची",
        "sa": "घंटानादसूचिः%",
        "ta": "அலாரம் பட்டியல்",
        "gu": "એલાર્મની યાદી"
    }

    const FAQs_added = {
        "en": "FAQs added successfully!",
        "hi": "अक्सर पूछे जाने वाले प्रश्न सफलतापूर्वक जोड़े गए",
        "sa": "प्रायः पृच्छितानि प्रश्नानि सफलतया संकलितानि ",
        "ta": "அடிக்கடி கேட்கப்படும் கேள்விகள் வெற்றிகரமாகச் சேர்க்கப்பட்டன",
        "gu": "વારંવાર પૂછવામાં આવતા પ્રશ્નો સફળતાપૂર્વક ઉમેરવામાં આવ્યા છે"
    }

    const FAQs_deleted = {
        "en": "FAQs deleted successfully!",
        "hi": "अक्सर पूछे जाने वाले प्रश्न सफलतापूर्वक हटाया गया",
        "sa": "प्रायः पृच्छितानि प्रश्नानि उच्छेदम् कृतः सफलतय ",
        "ta": "அடிக்கடி கேட்கப்படும் கேள்விகள் வெற்றிகரமாக நீக்கப்பட்டன",
        "gu": "FAQs સફળતાપૂર્વક કાઢી નાખ્યા"
    }

    const FAQs_status_changed = {
        "en": "FAQs status changed successfully!",
        "hi": "अक्सर पूछे जाने वाले प्रश्न की स्थिति सफलतापूर्वक बदली गई",
        "sa": "FAQs status changed successfully",
        "ta": "அடிக்கடி கேட்கப்படும் கேள்விகள் நிலை வெற்றிகரமாக மாற்றப்பட்டது",
        "gu": "FAQ ની સ્થિતિ સફળતાપૂર્વક બદલાઈ"
    }

    const content_list = {
        "en": "Content list",
        "hi": "सामग्री/कांटेट सूची",
        "sa": "विषयानुक्रमणिका",
        "ta": "உள்ளடக்கப் பட்டியல்",
        "gu": "ટિપ્પણીની યાદી"
    }
    const family_member_added = {
        "en": "Family member added successfully!",
        "hi": "परिवार के सदस्य को सफलतापूर्वक जोड़ा गया",
        "sa": "गृहजनः सफलतया संकलितः",
        "ta": "குடும்ப உறுப்பினர் வெற்றிகரமாக சேர்க்கப்பட்டார்",
        "gu": "પરિવારના સભ્ય સફળતાપૂર્વક ઉમેરવામાં આવ્યા છે"
    }
    const spouse_member_already_added = {
        "en": "Spouse member already added!",
        "hi": "जीवनसाथी का सदस्य पहले ही जोड़ा जा चुका है",
        "sa": "Family member already added",
        "ta": "துணை உறுப்பினர் ஏற்கனவே சேர்க்கப்பட்டுள்ளார்்",
        "gu": "જીવનસાથીનો સભ્ય પહેલેથી ઉમેરાયો છેે"
    }
    const main_member_already_added = {
        "en": "Main member already added!",
        "hi": "मुख्य सदस्य पहले ही जोड़ा जा चुका हैै",
        "sa": "Family member already added",
        "ta": "முதன்மை உறுப்பினர் ஏற்கனவே சேர்க்கப்பட்டுள்ளார்்",
        "gu": "મુખ્ય સભ્ય પહેલેથી ઉમેરાયા છેે"
    }
    const family_member_updated = {
        "en": "Family member updated successfully!",
        "hi": "परिवार के सदस्य को सफलतापूर्वक अपडेट किया गया",
        "sa": "गृहजनः सफलतया अद्यतनीकृतः",
        "ta": "குடும்ப உறுப்பினர் வெற்றிகரமாக புதுப்பிக்கப்பட்டார்",
        "gu": "પરિવારના સભ્ય સફળતાપૂર્વક અપડેટ થયા છે"
    }
    const member_removed = {
        "en": "Family member removed successfully!",
        "hi": "परिवार के सदस्य को सफलतापूर्वक निकाला गया",
        "sa": "गृहजनः सफलतया उच्छेदितः",
        "ta": "குடும்ப உறுப்பினர் வெற்றிகரமாக நீக்கப்பட்டுவிட்டார்",
        "gu": "પરિવારના સભ્યને સફળતાપૂર્વક દૂર કરવામાં આવ્યા છે"
    }

    const request_sent = {
        "en": "Friend request sent successfully.",
        "hi": "मित्रता अनुरोध सफलतापूर्वक भेजा गया",
        "sa": "मित्रतायाः निवेदनम् सफलतया प्रेषितम्",
        "ta": "நண்பர் கோரிக்கை வெற்றிகரமாக அனுப்பப்பட்டது",
        "gu": "મિત્રની વિનંતી સફળતાપૂર્વક મોકલવામાં આવી છે"
    }
    const request_already_sent = {
        "en": "Friend request already sent!",
        "hi": "मित्रता अनुरोध पहले ही भेजा जा चुका है",
        "sa": "मित्रतायाः निवेदनम्  पूर्वे एव  प्रेषितम्",
        "ta": "நண்பர் கோரிக்கை ஏற்கனவே அனுப்பப்பட்டுவிட்டது",
        "gu": "મિત્રની વિનંતી અગાઉથી મોકલવામાં આવી છે"
    }
    const request_list = {
        "en": "Request list",
        "hi": "अनुरोध सूची",
        "sa": "निवेदनम् सूचिः",
        "ta": "கோரிக்கை பட்டியல்",
        "gu": "વિનંતી યાદી"
    }
    const request_accepted = {
        "en": "Friend request accepted!",
        "hi": "मित्रता अनुरोध स्वीकार किया गया",
        "sa": "मित्रतायाः निवेदनम् स्वीकृतम्",
        "ta": "நண்பர் கோரிக்கை ஏற்கப்பட்டது",
        "gu": "મિત્રની વિનંતી સ્વીકારવામાં આવી છે"
    }
    const request_rejected = {
        "en": "Friend request rejected!",
        "hi": "मित्रता अनुरोध अस्वीकार किया गया",
        "sa": "Friend request rejected!",
        "ta": "நண்பர் கோரிக்கை நிராகரிக்கப்பட்டுவிட்டது",
        "gu": "મિત્રની વિનંતી નકારવામાં આવી છે"
    }
    const friends_list = {
        "en": "Friends list.",
        "hi": "मित्रता सूची",
        "sa": "मित्रसूचिः",
        "ta": "நண்பர்கள் பட்டியல்",
        "gu": "મિત્રોની યાદી"
    }
    const group_created = {
        "en": "Group created successfully.",
        "hi": "समूह सफलतापूर्वक बनाया गया",
        "sa": "सफलतया दलस्य निर्माणम् कृतम्",
        "ta": "குழு வெற்றிகரமாக உருவாக்கப்பட்டது",
        "gu": "ગ્રુપ સફળતાપૂર્વક બનાવવામાં આવ્યું છે"
    }
    const group_details = {
        "en": "Group details.",
        "hi": "समूह का विवरण",
        "sa": "दलस्य विवरणम्",
        "ta": "குழு விவரங்கள்",
        "gu": "ગ્રુપની વિગતો"
    }
    const group_list = {
        "en": "Group list.",
        "hi": "समूह सूची",
        "sa": "दलस्य सूचिः",
        "ta": "குழு பட்டியல்.",
        "gu": "ગ્રુપની યાદી."
    }
    const group_data_missing = {
        "en": "Please provide either group_id or group_sid!",
        "hi": "कृपया या तो group_id (समूह की आईडी) या group_sid (समूह की एसआईडी) प्रदान करें",
        "sa": "group_id अथवा group_sid इति प्रदेयताम्",
        "ta": "தயவுசெய்து group_id அல்லது group_sid ஐ வழங்கவும்",
        "gu": "કૃપા કરીને ક્યાં તો ગ્રુપ_આડી અથવા ગ્રુપ_એસઆઇડી પૂરું પાડો"
    }
    const chat_saved = {
        "en": "Data saved successfully.",
        "hi": "डेटा सफलतापूर्वक सहेजा गया",
        "sa": "स्वीकृतानि तत्वानि सफलतया संरक्षितानि",
        "ta": "தரவு வெற்றிகரமாக சேமிக்கப்பட்டது",
        "gu": "ડેટા સફળતાપૂર્વક સેવ કરવામાં આવ્યો છે"
    }
    const chat_exist = {
        "en": "You already in chat with this user",
        "hi": "आप पहले से ही इस उपयोगकर्ता के साथ चैट/बातचीत करते आ रहे हैं",
        "sa": "अनेन उपयोगकर्त्रा सह त्वम् पुरा एव संलापे अ",
        "ta": "இந்த பயனருடன் நீங்கள் ஏற்கனவே அரட்டையில் உள்ளீர்கள்",
        "gu": "તમે આ યુઝર સાથે અગાઉથી ચેટમાં છો"
    }
    const individual_chat_list = {
        "en": "Individual chat list.",
        "hi": "व्यक्तिगत चैट सूची",
        "sa": "व्यक्तिगत संलापसूचिः",
        "ta": "தனிப்பட்ட அரட்டை பட்டியல்",
        "gu": "વ્યક્તિગત ચેટની યાદી"
    }

    const participant_removed = {
        "en": "Participant removed successfully!",
        "hi": "प्रतिभागी को सफलतापूर्वक निकाला गया",
        "sa": "प्रतिभागी सफलतया उच्छेदितः",
        "ta": "பங்கேற்பாளர் வெற்றிகரமாக அகற்றப்பட்டார்",
        "gu": "સહભાગીને સફળતાપૂર્વક દૂર કરવામાં આવ્યા છે"
    }
    const channel_removed = {
        "en": "Channel removed successfully!",
        "hi": "चैनल सफलतापूर्वक निकाला गया",
        "sa": "प्रतिभागी तु सफलतया उच्छेदिता",
        "ta": "சேனல் வெற்றிகரமாக அகற்றப்பட்டது",
        "gu": "ચેનલ સફળતાપૂર્વક દૂર કરવામાં આવી છે"
    }
    const participant_blocked = {
        "en": "Participant blocked successfully!",
        "hi": "प्रतिभागी को सफलतापूर्वक ब्लॉक कर दिया गया",
        "sa": "प्रतिभागी सफलतया अवरुद्धा",
        "ta": "பங்கேற்பாளர் வெற்றிகரமாக முடக்கப்பட்டுவிட்டார்",
        "gu": "સહભાગીને સફળતાપૂર્વક બ્લોક કરવામાં આવ્યા છે"
    }
    const participant_unblocked = {
        "en": "Participant unblocked successfully!",
        "hi": "प्रतिभागी सफलतापूर्वक अनब्लॉक किया गया",
        "sa": "सफलतया प्रतिभागी अनवरोधम् ",
        "ta": "பங்கேற்பாளர் வெற்றிகரமாகத் திறந்தார்",
        "gu": "સહભાગી સફળતાપૂર્વક અનાવરોધિત"
    }
    const chat_cleared = {
        "en": "Chat cleared successfully!",
        "hi": "चैट/बातचीत सफलतापूर्वक क्लियर कर दी गई",
        "sa": "संलापस्य रिक्तिः सफलतया कृतः",
        "ta": "அரட்டை வெற்றிகரமாக அழிக்கப்பட்டது",
        "gu": "ચેટ સફળતાપૂર્વક ક્લિઅર થઈ છે"
    }
    const friend_blocked = {
        "en": "Friend blocked successfully!",
        "hi": "मित्र सफलतापूर्वक ब्लॉक किया गया",
        "sa": "सफलतया मित्रस्य अवरोधम् ",
        "ta": "நண்பர் வெற்றிகரமாக முடக்கப்பட்டுவிட்டார்",
        "gu": "મિત્રને સફળતાપૂર્વક બ્લોક કરવામાં આવ્યા છે"
    }
    const friend_unblocked = {
        "en": "Friend unblocked successfully!",
        "hi": "मित्र सफलतापूर्वक अनब्लॉक किया गया",
        "sa": "सफलतया मित्रस्य अनवरोधम् ",
        "ta": "நண்பர் வெற்றிகரமாகத் செயல்படுத்தப்பட்டுவிட்டார்",
        "gu": "મિત્રને સફળતાપૂર્વક અનબ્લોક કરવામાં આવ્યા છે"
    }
    const token_changed = {
        "en": "Device token updated successfully!",
        "hi": "डिवाइस टोकन सफलतापूर्वक अपडेट किया गया",
        "sa": "डिवाइस टोकेन इत्यस्य अद्यतनीकरणम् सफलतया",
        "ta": "சாதன டோக்கன் வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
        "gu": "ડિવાઇસ ટોકન સફળતાપૂર્વક અપડેટ થયું છે"
    }
    const notification_permission_changed = {
        "en": "Notification permission updated successfully!",
        "hi": "अधिसूचना/नोटिफिकेशन अनुमति सफलतापूर्वक अपडेट की गई",
        "sa": "अधिसूचनायाः अनुमतिः सफलतया अद्यतनीकृता",
        "ta": "அறிவிப்பு அனுமதி வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
        "gu": "નોટિફિકેશનની મંજૂરી સફળતાપૂર્વક અપડેટ થઈ છે"
    }


    const notification_list = {
        "en": "Notification list",
        "hi": "अधिसूचना/नोटिफिकेशन सूची",
        "sa": "अधिसूचना सूचिः",
        "ta": "அறிவிப்பு பட்டியல்",
        "gu": "નોટિફિકેશનની યાદી"
    }
    const notification_count = {
        "en": "Notification count",
        "hi": "अधिसूचना/नोटिफिकेशन गणना",
        "sa": "अधिसूचनायाः गणना",
        "ta": "அறிவிப்பு எண்ணிக்கை",
        "gu": "નોટિફિકેશનની સંખ્યા"
    }

    const notification_updated = {
        "en": "Notification updated successfully",
        "hi": "अधिसूचना/नोटिफिकेशन सफलतापूर्वक अपडेट किया गया",
        "sa": "अधिसूचनायाः अद्यतनीकरणम् सफलतया",
        "ta": "அறிவிப்பு வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
        "gu": "નોટિફિકેશન સફળતાપૂર્વક અપડેટ થયા છે"
    }

    const notification_created = {
        "en": "Notification created successfully",
        "hi": "अधिसूचना/नोटिफिकेशन सफलतापूर्वक बनाया गया",
        "sa": "अधिसूचनायाः सृजनम् सफलतया",
        "ta": "அறிவிப்பு வெற்றிகரமாக உருவாக்கப்பட்டது",
        "gu": "નોટિફિકેશન સફળતાપૂર્વક બનાવવામાં આવ્યા છે"
    }

    const notification_deleted = {
        "en": "Notification deleted successfully",
        "hi": "अधिसूचना/नोटिफिकेशन सफलतापूर्वक हटाया गया",
        "sa": "अधिसूचनायाः उच्छेदम् कृतः सफलतया",
        "ta": "அறிவிப்பு வெற்றிகரமாக நீக்கப்பட்டது",
        "gu": "નોટિફિકેશન સફળતાપૂર્વક ડિલિટ કરવામાં આવ્યા છે"
    }

    const notification_details = {
        "en": "Notification details",
        "hi": "अधिसूचना/नोटिफिकेशन विवरण",
        "sa": "अधिसूचनायाः विवरणम्",
        "ta": "அறிவிப்பு விவரங்கள்",
        "gu": "નોટિફિકેશનની વિગતો"
    }
    const family_tree_switched = {
        "en": "Family tree switched successfully",
        "hi": "वंश वृक्ष का विवरण सफलतापूर्वक स्विच किया गया",
        "sa": "वंशवृक्षः सफलतया पल्लवितः",
        "ta": "குடும்ப மரம் வெற்றிகரமாக மாறியது",
        "gu": "પરિવાર વૃક્ષ સફળતાપૂર્વક બદલાયું છે"
    }
    const family_tree = {
        "en": "Family tree details",
        "hi": "वंश वृक्ष का विवरण",
        "sa": "वंशवृक्षस्य विवरणम्",
        "ta": "குடும்ப மர விவரங்கள்",
        "gu": "પરિવાર વૃક્ષની વિગતો"
    }
    const family_tree_updated = {
        "en": "Family tree details updated successfully",
        "hi": "वंश वृक्ष का विवरण सफलतापूर्वक अपडेट किया गया",
        "sa": "वंशवृक्षस्य विवरणम् सफलतया अद्यतनीकृतम्%",
        "ta": "குடும்ப மர விவரங்கள் வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
        "gu": "પરિવાર વૃક્ષની વિગતો સફળતાપૂર્વક અપડેટ થઈ છે"
    }
    const spouse_mobile_exist = {
        "en": "Entered spouse mobile number already added in two family tree, Please change and try again!",
        "hi": "पति/पत्नी का दर्ज मोबाइल नंबर पहले से ही दो वंश वृक्ष में जोड़ा/दिया गया है, कृपया इसे बदले और फिर से कोशिश करें!",
        "sa": "प्रविष्टा दम्पत्योःमोबाइलसंख्या तु पूर्वमेव संकलिता",
        "ta": "இரண்டு குடும்ப மரங்களில் வாழ்க்கைத் துணைவரின் மொபைல் எண் ஏற்கனவே சேர்க்கப்பட்டுவிட்டது, தயவுசெய்து மாற்றி மீண்டும் முயற்சிக்கவும்!",
        "gu": "નાંખવામાં આવેલો જીવનસાથીનો મોબાઈલ નંબર પહેલેથી જ બે પરિવાર વૃક્ષમાં ઉમેરેલો છે, કૃપા કરીને બદલો"
    }
    const member_mobile_exist = {
        "en": "Entered member mobile number already added in two family tree, Please change and try again!",
        "hi": "सदस्य/मेंबर का दर्ज मोबाइल नंबर पहले से ही दो वंश वृक्ष में जोड़ा/दिया गया है, कृपया इसे बदले और फिर से कोशिश करें!",
        "sa": "प्रविष्टा सदस्यस्य मोबाइलसंख्या तु पूर्वमेव संकलिता",
        "ta": "இரண்டு குடும்ப மரத்தில் உறுப்பினர் மொபைல் எண் ஏற்கனவே சேர்க்கப்பட்டுள்ளது, தயவுசெய்து இதனை மாற்றி மீண்டும் முயற்சிக்கவும்",
        "gu": "નાંખવામાં આવેલો સભ્યનો મોબાઈલ નંબર પહેલેથી જ બે પરિવાર વૃક્ષમાં ઉમેરેલો છે, કૃપા કરીને બદલો"
    }
    const relation_updated = {
        "en": "Relation updated successfully",
        "hi": "संबंध सफलतापूर्वक अपडेट किया गया",
        "sa": "संसर्गः सफलतया अद्यतनीकृतः",
        "ta": "உறவு வெற்றிகரமாக புதுப்பிக்கப்பட்டது",
        "gu": "સંબંધ સફળતાપૂર્વક અપડેટ થયો છે"
    }
    const family_tree_removed = {
        "en": "Family tree removed successfully",
        "hi": "वंश वृक्ष सफलतापूर्वक हटाया गया",
        "sa": "वंशवृक्षः सफलतया निष्कासितः",
        "ta": "குடும்ப மரம் வெற்றிகரமாக அகற்றப்பட்டது",
        "gu": "પરિવાર વૃક્ષ સફળતાપૂર્વક દૂર થયું છે"
    }
    const token_generated = {
        "en": "Token generated successfully",
        "hi": "टोकन सफलतापूर्वक जनरेट किया गया",
        "sa": "टोकेन इति सफलतया उत्पादितः",
        "ta": "டோக்கன் வெற்றிகரமாக உருவாக்கப்பட்டது",
        "gu": "ટોકન સફળતાપૂર્વક જનરેટ થયો છે"
    }
    const feed_list = {
        "en": "Feed list",
        "hi": "फ़ीड सूची",
        "sa": "Feed list",
        "ta": "உணவுப் பட்டியல்",
        "gu": "ફીડ યાદી"
    }
    const no_family_tree_found = {
        "en": "No default family tree found",
        "hi": "कोई डिफ़ॉल्ट फ़ैमिली ट्री नहीं मिला",
        "sa": "No default family tree found",
        "ta": "இயல்புநிலை குடும்ப மரம் இல்லை",
        "gu": "કોઈ મૂળભૂત કુટુંબ વૃક્ષ મળ્યું નથી"
    }
    const language_list = {
        "en": "Language list",
        "hi": "भाषा सूची",
        "sa": "Language list",
        "ta": "மொழி பட்டியல்",
        "gu": "ભાષા યાદી"
    }

    const blocked_user_list: LangagueWiseMessage = {
        "en": "Blocked user list",
        "hi": "Blocked user list",
        "sa": "Blocked user list",
        "ta": "Blocked user list",
        "gu": "Blocked user list"
    }
    const password_empty: LangagueWiseMessage = {
        "en": "Password has not set yet, Please forgot password to set your password",
        "hi": "पासवर्ड अभी तक सेट नहीं हुआ है, कृपया अपना पासवर्ड सेट करने के लिए पासवर्ड भूल गए",
        "sa": "Password has not set yet, Please forgot password to set your password",
        "ta": "கடவுச்சொல் இன்னும் அமைக்கப்படவில்லை, உங்கள் கடவுச்சொல்லை அமைக்க கடவுச்சொல்லை மறந்துவிடவும்",
        "gu": "પાસવર્ડ હજી સેટ થયો નથી, કૃપા કરીને તમારો પાસવર્ડ સેટ કરવા માટે પાસવર્ડ ભૂલી ગયાd"
    }
    const signup: LangagueWiseMessage = {
        "en": "User registered successfully",
        "hi": "उपयोगकर्ता सफलतापूर्वक पंजीकृत हो गया",
        "sa": "उपयोगकर्तायाः पंजीकरणम् सफलम्",
        "ta": "பயனர் வெற்றிகரமாக பதிவு செய்தார்",
        "gu": "વપરાશકર્તાએ સફળતાપૂર્વક નોંધણી કરાવી"
    }
    const enter_either_id_or_language: LangagueWiseMessage = {
        "en": "Enter either faq_id or language",
        "hi": "Enter either faq_id or languageा",
        "sa": "Enter either faq_id or language",
        "ta": "Enter either faq_id or language",
        "gu": "Enter either faq_id or language"
    }
    const role_not_auth: LangagueWiseMessage = {
        "en": "Your role is not authorized",
        "hi": "Enter either faq_id or languageा",
        "sa": "Enter either faq_id or language",
        "ta": "Enter either faq_id or language",
        "gu": "Enter either faq_id or language"
    }
    const updated: LangagueWiseMessage = {
        "en": "Data updated successfully.",
        "hi": "Enter either faq_id or languageा",
        "sa": "Enter either faq_id or language",
        "ta": "Enter either faq_id or language",
        "gu": "Enter either faq_id or language"
    }
    const cases_assigned = {
        "en": "Case assigned successfully.",
        "hi": "Enter either faq_id or languageा",
        "sa": "Enter either faq_id or language",
        "ta": "Enter either faq_id or language",
        "gu": "Enter either faq_id or language"
    }

    const notice_sent = {
        "en": "Notice sent successfully.",
        "hi": "Enter either faq_id or languageा",
        "sa": "Enter either faq_id or language",
        "ta": "Enter either faq_id or language",
        "gu": "Enter either faq_id or language"
    }

    const check_your_mail = {
        "en": "Success, please check your mail.",
        "hi": "Enter either faq_id or languageा",
        "sa": "Enter either faq_id or language",
        "ta": "Enter either faq_id or language",
        "gu": "Enter either faq_id or language"
    }

    const deleted_data: LangagueWiseMessage = {
        "en": "Data deleted successfully.",
        "hi": "Enter either faq_id or languageा",
        "sa": "Enter either faq_id or language",
        "ta": "Enter either faq_id or language",
        "gu": "Enter either faq_id or language"
    }

    return {
        login_success: login_success[lang],
        bank_added: bank_added[lang],
        unauthorized: unauthorized[lang],
        mobile_exist: mobile_exist[lang],
        email_exist: email_exist[lang],
        mobile_not_verified: mobile_not_verified[lang],
        email_not_verified: email_not_verified[lang],
        ac_deactivated: ac_deactivated[lang],
        invalid_token: invalid_token[lang],
        token_required: token_required[lang],
        invalid_api_key: invalid_api_key[lang],
        incorrect_cc: incorrect_cc[lang],
        otp_sent: otp_sent[lang],
        otp_sent_email: otp_sent_email[lang],
        otp_resent: otp_resent[lang],
        incorrect_otp: incorrect_otp[lang],
        otp_verified: otp_verified[lang],
        incorrect_password: incorrect_password[lang],
        exists,
        unique,
        required,
        email,
        maxLength,
        otp_not_verified: otp_not_verified[lang],
        password_changed: password_changed[lang],
        privacy_changed: privacy_changed[lang],
        privacy_and_permission: privacy_and_permission[lang],
        profile_changed: profile_changed[lang],
        complete_profile: complete_profile[lang],
        incorrect_mobile: incorrect_mobile[lang],
        profile_not_complete: profile_not_complete[lang],
        user_list: user_list[lang],
        user_logs: user_logs[lang],
        recipe_added: recipe_added[lang],
        recipe_updated: recipe_updated[lang],
        recipe_deleted: recipe_deleted[lang],
        recipe_privacy_changed: recipe_privacy_changed[lang],
        recipe_list: recipe_list[lang],
        recipe_comments_added: recipe_comments_added[lang],
        recipe_comments_updated: recipe_comments_updated[lang],
        recipe_comments_deleted: recipe_comments_deleted[lang],
        recipe_like_added: recipe_like_added[lang],
        social_id_missing: social_id_missing[lang],
        like_added_on_comment: like_added_on_comment[lang],
        like_added_on_memory: like_added_on_memory[lang],
        like_updated_on_memory: like_updated_on_memory[lang],
        like_already_added_on_comment: like_already_added_on_comment[lang],
        like_already_added_on_recipe: like_already_added_on_recipe[lang],
        incorrect_current_password: incorrect_current_password[lang],
        like_updated_on_recipe: like_updated_on_recipe[lang],
        like_on_comment_change: like_on_comment_change[lang],
        wrong_email: wrong_email[lang],
        status_changed: status_changed[lang],
        user_deleted: user_deleted[lang],
        about_changed: about_changed[lang],
        privacy_policy_changed: privacy_policy_changed[lang],
        term_and_conditions_changed: term_and_conditions_changed[lang],
        FAQs_changed: FAQs_changed[lang],
        FAQs_list: FAQs_list[lang],
        user_details: user_details[lang],
        album_details: album_details[lang],
        user_logout: user_logout[lang],
        blocked_user_list: blocked_user_list[lang],
        password_empty: password_empty[lang],
        signup: signup[lang],
        enter_either_id_or_language: enter_either_id_or_language[lang],
        role_not_auth: role_not_auth[lang],
        bank_name_exists: bank_name_exists[lang],
        bank_updated: bank_updated[lang],
        user_updated: user_updated[lang],
        template_added: template_added[lang],
        updated: updated[lang],
        title_exists: title_exists[lang]
    }
};

export default messages;