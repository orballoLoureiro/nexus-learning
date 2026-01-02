// tracking.js - Sistema de Atribución Multi-Touch
// Implementar en todas las páginas del sitio

(function() {
    'use strict';
    
    //const WEBHOOK_URL = 'https://hook.eu2.make.com/iwygfknmc0u4o2zy764cyuw8crxp8wtx';
    const WEBHOOK_URL = 'https://primary-production-62b8.up.railway.app/webhook/b593e252-45c6-41e6-8b1e-47546819acab';
    const CONSENT_KEY = '_tracking_consent';
    const ANON_ID_KEY = '_anon_id';
    const USER_ID_KEY = '_user_id';
    const SESSION_ID_KEY = '_session_id';
    const IDENTITY_SENT_KEY = '_identity_sent';
    
    // ============================================
    // FUNCIONES DE IDENTIFICACIÓN
    // ============================================
    
    function getAnonymousId() {
      let anonId = localStorage.getItem(ANON_ID_KEY);
      
      if (!anonId) {
        anonId = 'anon_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem(ANON_ID_KEY, anonId);
        localStorage.setItem(ANON_ID_KEY + '_created', new Date().toISOString());
      }
      
      return anonId;
    }
    
    function getUserId() {
      let userId = localStorage.getItem(USER_ID_KEY);
      if (userId) return userId;
      
      userId = getCookie('user_email');
      if (userId) {
        localStorage.setItem(USER_ID_KEY, userId);
        return userId;
      }
      
      const emailField = document.querySelector('input[type="email"]');
      if (emailField && emailField.value && emailField.value.includes('@')) {
        userId = emailField.value;
        localStorage.setItem(USER_ID_KEY, userId);
        return userId;
      }
      
      return null;
    }
    
    function getSessionId() {
      const gaCookie = getCookie('_ga');
      if (gaCookie) return gaCookie;
      
      let sessionId = sessionStorage.getItem(SESSION_ID_KEY);
      if (!sessionId) {
        sessionId = 'sess_' + Date.now();
        sessionStorage.setItem(SESSION_ID_KEY, sessionId);
      }
      return sessionId;
    }
    
    // ============================================
    // FUNCIONES AUXILIARES
    // ============================================
    
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    }
    
    function getUrlParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    function getFbclid() {
      // Buscar en URL actual (click nuevo)
      const fbclidFromUrl = getUrlParam('fbclid');
      
      if (fbclidFromUrl) {
        // Nuevo click: guardar en localStorage con expiración (28 días para Facebook)
        const expiration = Date.now() + (28 * 24 * 60 * 60 * 1000);
        localStorage.setItem('_fbclid', fbclidFromUrl);
        localStorage.setItem('_fbclid_expires', expiration.toString());
        localStorage.setItem('_fbclid_first_seen', new Date().toISOString());
        return fbclidFromUrl;
      }
      
      // No hay en URL: buscar en localStorage y verificar expiración
      const stored = localStorage.getItem('_fbclid');
      const expires = localStorage.getItem('_fbclid_expires');
      if (stored && expires && Date.now() < parseInt(expires)) {
        return stored;
      } else if (stored) {
        // Limpiar si expiró
        localStorage.removeItem('_fbclid');
        localStorage.removeItem('_fbclid_expires');
        localStorage.removeItem('_fbclid_first_seen');
      }
      return null;
    }
    
    function getFbclidSource() {
      // Retorna si el fbclid viene de la URL actual (nuevo click) o está persistido
      if (getUrlParam('fbclid')) return 'url_current';
      if (getFbclid()) return 'localStorage_persisted';
      return null;
    }
    
    function getGclid() {
      // Buscar en URL actual (click nuevo)
      const gclidFromUrl = getUrlParam('gclid');
      
      if (gclidFromUrl) {
        // Nuevo click: guardar en localStorage con expiración (90 días para Google)
        const expiration = Date.now() + (90 * 24 * 60 * 60 * 1000);
        localStorage.setItem('_gclid', gclidFromUrl);
        localStorage.setItem('_gclid_expires', expiration.toString());
        localStorage.setItem('_gclid_first_seen', new Date().toISOString());
        return gclidFromUrl;
      }
      
      // No hay en URL: buscar en localStorage y verificar expiración
      const stored = localStorage.getItem('_gclid');
      const expires = localStorage.getItem('_gclid_expires');
      if (stored && expires && Date.now() < parseInt(expires)) {
        return stored;
      } else if (stored) {
        // Limpiar si expiró
        localStorage.removeItem('_gclid');
        localStorage.removeItem('_gclid_expires');
        localStorage.removeItem('_gclid_first_seen');
      }
      return null;
    }
    
    function getGclidSource() {
      // Retorna si el gclid viene de la URL actual (nuevo click) o está persistido
      if (getUrlParam('gclid')) return 'url_current';
      if (getGclid()) return 'localStorage_persisted';
      return null;
    }
    
    function getMsclkid() {
      // Buscar en URL actual (click nuevo)
      const msclkidFromUrl = getUrlParam('msclkid');
      
      if (msclkidFromUrl) {
        // Nuevo click: guardar en localStorage con expiración (90 días para Microsoft)
        const expiration = Date.now() + (90 * 24 * 60 * 60 * 1000);
        localStorage.setItem('_msclkid', msclkidFromUrl);
        localStorage.setItem('_msclkid_expires', expiration.toString());
        localStorage.setItem('_msclkid_first_seen', new Date().toISOString());
        return msclkidFromUrl;
      }
      
      // No hay en URL: buscar en localStorage y verificar expiración
      const stored = localStorage.getItem('_msclkid');
      const expires = localStorage.getItem('_msclkid_expires');
      if (stored && expires && Date.now() < parseInt(expires)) {
        return stored;
      } else if (stored) {
        // Limpiar si expiró
        localStorage.removeItem('_msclkid');
        localStorage.removeItem('_msclkid_expires');
        localStorage.removeItem('_msclkid_first_seen');
      }
      return null;
    }
    
    function getMsclkidSource() {
      // Retorna si el msclkid viene de la URL actual (nuevo click) o está persistido
      if (getUrlParam('msclkid')) return 'url_current';
      if (getMsclkid()) return 'localStorage_persisted';
      return null;
    }
    
    function inferSource() {
      const ref = document.referrer.toLowerCase();
      if (ref.includes('google')) return 'google';
      if (ref.includes('facebook') || ref.includes('fb.')) return 'facebook';
      if (ref.includes('linkedin')) return 'linkedin';
      if (ref.includes('twitter') || ref.includes('t.co')) return 'twitter';
      if (ref.includes('instagram')) return 'instagram';
      if (ref === '') return 'direct';
      return 'referral';
    }
    
    function getDeviceType() {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'tablet';
      if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return 'mobile';
      return 'desktop';
    }
    
    function getBrowser() {
      const ua = navigator.userAgent;
      if (ua.includes('Firefox')) return 'Firefox';
      if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
      if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
      if (ua.includes('Edg')) return 'Edge';
      if (ua.includes('MSIE') || ua.includes('Trident')) return 'IE';
      return 'Other';
    }
    

    window.identifyUser = function(email) {
      if (email && email.includes('@')) {
        localStorage.setItem(USER_ID_KEY, email.toLowerCase().trim());
        sessionStorage.removeItem(IDENTITY_SENT_KEY);
        sendIdentityEvent(getAnonymousId(), email);
        console.log('Tracking: Usuario identificado manualmente', email);
      }
    };
    
    window.acceptTracking = function() {
      localStorage.setItem(CONSENT_KEY, 'true');
      console.log('Tracking: Consentimiento otorgado');
     // trackTouchpoint('consent_granted');
      location.reload();
    };
    
    window.rejectTracking = function() {
      localStorage.setItem(CONSENT_KEY, 'false');
      localStorage.removeItem(ANON_ID_KEY);
      localStorage.removeItem(USER_ID_KEY);
      console.log('Tracking: Consentimiento rechazado');
    };
    
    window.getTrackingInfo = function() {
      return {
        anonymous_id: getAnonymousId(),
        user_id: getUserId(),
        session_id: getSessionId(),
        consent: hasConsent()
      };
    };

    function hasConsent() {
     //acceptTracking(); 

     localStorage.setItem(CONSENT_KEY, 'true');

     const consent = localStorage.getItem(CONSENT_KEY);
      //const consent='true';
      return consent === 'true';
    }
    
    // ============================================
    // FUNCIÓN PRINCIPAL DE TRACKING
    // ============================================
    
    function trackTouchpoint(eventType, additionalData = {}) {
      if (!hasConsent()) {
        console.log('Tracking: Esperando consentimiento del usuario');
        return;
      }
      
      const anonId = getAnonymousId();
      const userId = getUserId();
      const sessionId = getSessionId();
      
      const payload = {
        anonymous_id: anonId,
        user_id: userId,
        session_id: sessionId,
        event_type: eventType,
        timestamp: new Date().toISOString(),
        channel: getUrlParam('utm_source') || inferSource(),  // Mapeado a 'channel' en Supabase
        source: getUrlParam('utm_source') || inferSource(),   // Mantener por compatibilidad
        medium: getUrlParam('utm_medium') || (document.referrer ? 'referral' : 'none'),
        campaign: getUrlParam('utm_campaign') || null,
        content: getUrlParam('utm_content') || null,
        term: getUrlParam('utm_term') || null,
        utm_source: getUrlParam('utm_source'),
        utm_medium: getUrlParam('utm_medium'),
        utm_campaign: getUrlParam('utm_campaign'),
        utm_content: getUrlParam('utm_content'),
        utm_term: getUrlParam('utm_term'),
        page_url: window.location.href,
        page_title: document.title,
        referrer: document.referrer,
        device_type: getDeviceType(),
        browser: getBrowser(),
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        language: navigator.language,
        // Click IDs - Identificadores de plataformas publicitarias
        fbclid: getFbclid(),                    // Facebook Click ID (puede venir de URL o localStorage)
        fbclid_source: getFbclidSource(),       // 'url_current' = nuevo click en URL, 'localStorage_persisted' = persistido
        gclid: getGclid(),                      // Google Ads Click ID (puede venir de URL o localStorage)
        gclid_source: getGclidSource(),         // 'url_current' = nuevo click en URL, 'localStorage_persisted' = persistido
        msclkid: getMsclkid(),                  // Microsoft Ads Click ID (puede venir de URL o localStorage)
        msclkid_source: getMsclkidSource(),     // 'url_current' = nuevo click en URL, 'localStorage_persisted' = persistido
      };
      
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
        keepalive: true
      }).then(() => {
        console.log('Tracking: Evento enviado', eventType);
      }).catch(err => {
        console.error('Tracking: Error al enviar evento', err);
      });
      
      if (userId && !sessionStorage.getItem(IDENTITY_SENT_KEY)) {
        sendIdentityEvent(anonId, userId);
        sessionStorage.setItem(IDENTITY_SENT_KEY, 'true');
      }
    }
    
    // ============================================
    // EVENTO ESPECIAL DE IDENTIFICACIÓN
    // ============================================
    
    function sendIdentityEvent(anonId, userId) {
      console.log('Tracking: Enviando evento de identificación');
      
      const sessionId = getSessionId();
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          event_type: 'identify',
          anonymous_id: anonId,
          user_id: userId,
          timestamp: new Date().toISOString(),
          identification_source: 'auto_detected',
          page_url: window.location.href,
          session_id: sessionId,
          channel: getUrlParam('utm_source') || inferSource(),  // Mapeado a 'channel' en Supabase
          source: getUrlParam('utm_source') || inferSource(),   // Mantener por compatibilidad
          medium: getUrlParam('utm_medium') || (document.referrer ? 'referral' : 'none'),
          campaign: getUrlParam('utm_campaign') || null,
          content: getUrlParam('utm_content') || null,
          term: getUrlParam('utm_term') || null,
          utm_source: getUrlParam('utm_source'),
          utm_medium: getUrlParam('utm_medium'),
          utm_campaign: getUrlParam('utm_campaign'),
          utm_content: getUrlParam('utm_content'),
          utm_term: getUrlParam('utm_term'),
          device_type: getDeviceType(),
          browser: getBrowser(),
          user_agent: navigator.userAgent,
          screen_resolution: `${screen.width}x${screen.height}`,
          language: navigator.language,
          // Click IDs con fuente
          fbclid: getFbclid(),
          fbclid_source: getFbclidSource(),
          gclid: getGclid(),
          gclid_source: getGclidSource(),
          msclkid: getMsclkid(),
          msclkid_source: getMsclkidSource()
        }),
        keepalive: true
      }).then(() => {
        console.log('Tracking: Identificación enviada correctamente');
      }).catch(err => {
        console.error('Tracking: Error al enviar identificación', err);
      });
    }
    
    // ============================================
    // TRACKING AUTOMÁTICO
    // ============================================
    
    if (hasConsent()) {
      // 1. Page View automático
      trackTouchpoint('page_view');
      
      // 2. Track clicks en CTAs y botones importantes
      document.addEventListener('click', function(e) {
        const target = e.target.closest('a, button');
        if (target && (
          target.classList.contains('cta') ||
          target.classList.contains('btn') ||
          target.classList.contains('btn-primary') ||
          target.classList.contains('btn-cta') ||
          target.getAttribute('data-track') === 'true'
        )) {
          trackTouchpoint('cta_click', {
            cta_text: target.textContent.trim(),
            cta_url: target.href || null,
            cta_id: target.id || null,
            cta_class: target.className
          });
        }
      });
      
      // 3. Detectar cuando usuario proporciona email
      document.addEventListener('blur', function(e) {
        if (e.target.type === 'email' && e.target.value.includes('@')) {
          const email = e.target.value.toLowerCase().trim();
          const currentUserId = localStorage.getItem(USER_ID_KEY);
          
          if (email !== currentUserId) {
            localStorage.setItem(USER_ID_KEY, email);
            sessionStorage.removeItem(IDENTITY_SENT_KEY);
            sendIdentityEvent(getAnonymousId(), email);
            trackTouchpoint('page_view_identified');
          }
        }
      }, true);
      
      // 4. Track envío de formularios
      document.addEventListener('submit', function(e) {
        const form = e.target;
        if (form.tagName === 'FORM') {
          const emailField = form.querySelector('input[type="email"]');
          const email = emailField ? emailField.value : null;
          
          trackTouchpoint('form_submit', {
            form_name: form.name || form.id || 'unnamed_form',
            form_action: form.action,
            form_method: form.method,
            email_provided: email ? true : false
          });
          
          if (email && email.includes('@')) {
            localStorage.setItem(USER_ID_KEY, email.toLowerCase().trim());
          }
        }
      });
      
      // 5. Track tiempo en página (enviar al salir)
      const pageLoadTime = Date.now();
      window.addEventListener('beforeunload', function() {
        const timeOnPage = Math.round((Date.now() - pageLoadTime) / 1000);
        
        if (timeOnPage > 5) {
          trackTouchpoint('page_exit', {
            time_on_page_seconds: timeOnPage
          });
        }
      });
      
      // 6. Track scroll depth
      let maxScrollDepth = 0;
      let scrollTracked = false;
      
      window.addEventListener('scroll', function() {
        const scrollPercentage = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercentage > maxScrollDepth) {
          maxScrollDepth = scrollPercentage;
        }
        
        if (!scrollTracked && maxScrollDepth >= 75) {
          trackTouchpoint('scroll_depth', {
            scroll_percentage: maxScrollDepth
          });
          scrollTracked = true;
        }
      });
    }
    
    // ============================================
    // FUNCIONES PÚBLICAS
    // ============================================
    
    window.trackEvent = trackTouchpoint;
    
   
    
    console.log('Tracking System Initialized', window.getTrackingInfo());
    
  })();