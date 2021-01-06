importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

firebase.initializeApp({'messagingSenderId': '1002047503135'});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler((payload) => {
 console.log('[firebase-messaging-sw.js] Received background message ', payload);
 // Customize notification here
 const notificationTitle = 'Background Message Title';
 const notificationOptions = {
   body: 'Background Message body.'
   // icon: '/firebase-logo.png'
 };

 return self.registration.showNotification(notificationTitle,
     notificationOptions);
});