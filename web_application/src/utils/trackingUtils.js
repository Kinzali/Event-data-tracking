export function trackLoginEvent(username) {
    if (window.analytics) {
      console.log("Sending track event via analytics");
      window.analytics.track("Logged In", {
        person_id: username,
        type: 'Login',
        timestamp: new Date().toISOString(),
        url: window.location.href
      });
    } else {
      console.log("window.analytics does not exist");
    }
  }
  