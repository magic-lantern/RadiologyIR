import Ember from 'ember';
import DS from 'ember-data';

export default DS.Adapter.extend({
/*
  findRecord()
  createRecord()
  updateRecord()
  deleteRecord()
  query()
  */
  apikey: "4b94305d853d3e7c91ed4774aa428f75",
  url: "http://www.yottalook.com/api_images_2_0.php",
//  http://www.yottalook.com/api_images_2_0.php?app_id=[INSERT UNIQUE APPLICATION ID HERE]&mod=all&q=[QUERY TERM(S) HERE]&cl=10&t=yy
//  http://www.yottalook.com/api_images_2_0.php?app_id=4b94305d853d3e7c91ed4774aa428f75&q=asthma&cl=50&t=yy
  
  findAll: function(store, type, sinceToken) {
    var query;
    var $ = Ember.$;

    //actual first row is "<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />"
    var faked = '<?xml version="1.0" encoding="UTF-8"?>\
    <YottalookWS>\
      <YottalookImages>\
        <QueryResultInfo>\
          <Server_Status>23.253.64.143 - - [25/Oct/2015:03:46:24 +0000] "GET / HTTP/1.1" 200 &#13;\
    </Server_Status>\
          <app_id>4b94305d853d3e7c91ed4774aa428f75</app_id>\
          <OriginalQuery></OriginalQuery>\
          <QuerySuccess>Yes</QuerySuccess>\
          <TotalResults>10</TotalResults>\
          <XR>1</XR>\
          <MA>0</MA>\
          <CT>9</CT>\
          <MR>0</MR>\
          <NM>0</NM>\
          <US>0</US>\
          <MaxResultsPerQuery>5</MaxResultsPerQuery>\
        </QueryResultInfo>\
        <Results>\
          <Figure>\
            <ResultID>1</ResultID>\
            <ThumbLocalLink>http://www.yottalook.com/images/thumbnails/small/cf6539a170fe8de1b15f581563580182540bdbf2.jpg</ThumbLocalLink>\
            <Source>AJR</Source>\
            <FullFigureLink>http://www.ajronline.org/content/198/3/W217/F5.expansion.html</FullFigureLink>\
            <ArticleTitle>Review: Inflammatory Pseudotumor: The Great Mimicker</ArticleTitle>\
            <ArticleLink>http://www.ajronline.org/content/198/3/W217.full</ArticleLink>\
            <ArticleLinkPDF>http://www.ajronline.org/content/198/3/W217.reprint</ArticleLinkPDF>\
            <FigsonlyLink>http://www.ajronline.org/content/198/3/W217.figsonly</FigsonlyLink>\
            <Caption>Fig. 4A â€”14-year-old girl with history of asthma. A,Axial (A) and coronal multiplanar reformation (B) contrast-enhanced CT images show middle and posterior mediastinal mass encasing carina. Coronal image shows extent of mass. Pathologic result was inflammatory myofibroblastic tumor.</Caption>\
            <ImageType>CT</ImageType>\
            <Date>2012-03-01</Date>\
            <SubscriptionStatus>n</SubscriptionStatus>\
          </Figure>\
          <Figure>\
            <ResultID>2</ResultID>\
            <ThumbLocalLink>http://www.yottalook.com/images/thumbnails/small/68f01ed6f9cbf12406abff400650c1a759cea224.jpg</ThumbLocalLink>\
            <Source>AJR</Source>\
            <FullFigureLink>http://www.ajronline.org/content/198/3/W217/F6.expansion.html</FullFigureLink>\
            <ArticleTitle>Review: Inflammatory Pseudotumor: The Great Mimicker</ArticleTitle>\
            <ArticleLink>http://www.ajronline.org/content/198/3/W217.full</ArticleLink>\
            <ArticleLinkPDF>http://www.ajronline.org/content/198/3/W217.reprint</ArticleLinkPDF>\
            <FigsonlyLink>http://www.ajronline.org/content/198/3/W217.figsonly</FigsonlyLink>\
            <Caption>Fig. 4B â€”14-year-old girl with history of asthma. B,Axial (A) and coronal multiplanar reformation (B) contrast-enhanced CT images show middle and posterior mediastinal mass encasing carina. Coronal image shows extent of mass. Pathologic result was inflammatory myofibroblastic tumor.</Caption>\
            <ImageType>CT</ImageType>\
            <Date>2012-03-01</Date>\
            <SubscriptionStatus>n</SubscriptionStatus>\
          </Figure>\
          <Figure>\
            <ResultID>3</ResultID>\
            <ThumbLocalLink>http://www.yottalook.com/images/thumbnails/small/1e7c3b8ce7cf3213c02e7a5592ff180051179a95.jpg</ThumbLocalLink>\
            <Source>AJR</Source>\
            <FullFigureLink>http://www.ajronline.org/content/197/5/1229/F7.expansion.html</FullFigureLink>\
            <ArticleTitle>Original Research: Ossification Patterns of the Atlas Vertebra</ArticleTitle>\
            <ArticleLink>http://www.ajronline.org/content/197/5/1229.full</ArticleLink>\
            <ArticleLinkPDF>http://www.ajronline.org/content/197/5/1229.reprint</ArticleLinkPDF>\
            <FigsonlyLink>http://www.ajronline.org/content/197/5/1229.figsonly</FigsonlyLink>\
            <Caption>Fig. 7 â€”Type 4 (four symmetric anterior arch ossification centers [arrows]) in 33-month-old boy with asthma.</Caption>\
            <ImageType>CT</ImageType>\
            <Date>2011-11-01</Date>\
            <SubscriptionStatus>n</SubscriptionStatus>\
          </Figure>\
          <Figure>\
            <ResultID>4</ResultID>\
            <ThumbLocalLink>http://www.yottalook.com/images/thumbnails/small/e9ee2bb113122b303270c27c11696e1d6c9ada14.jpg</ThumbLocalLink>\
            <Source>AJR</Source>\
            <FullFigureLink>http://www.ajronline.org/content/197/5/1229/F3.expansion.html</FullFigureLink>\
            <ArticleTitle>Original Research: Ossification Patterns of the Atlas Vertebra</ArticleTitle>\
            <ArticleLink>http://www.ajronline.org/content/197/5/1229.full</ArticleLink>\
            <ArticleLinkPDF>http://www.ajronline.org/content/197/5/1229.reprint</ArticleLinkPDF>\
            <FigsonlyLink>http://www.ajronline.org/content/197/5/1229.figsonly</FigsonlyLink>\
            <Caption>Fig. 3 â€”Type 1 (a single anterior arch ossification center) in 47-month-old girl with recurrent asthma. Neurocentral synchondroses (arrows) are seen.</Caption>\
            <ImageType>CT</ImageType>\
            <Date>2011-11-01</Date>\
            <SubscriptionStatus>n</SubscriptionStatus>\
          </Figure>\
          <Figure>\
            <ResultID>5</ResultID>\
            <ThumbLocalLink>http://www.yottalook.com/images/thumbnails/small/c9dd6f34e012de733004807dce1490cd985b4e5d.jpg</ThumbLocalLink>\
            <Source>AJR</Source>\
            <FullFigureLink>http://www.ajronline.org/content/197/6/W970/F13.expansion.html</FullFigureLink>\
            <ArticleTitle>Pattern of the Month: Mosaic Attenuation</ArticleTitle>\
            <ArticleLink>http://www.ajronline.org/content/197/6/W970.full</ArticleLink>\
            <ArticleLinkPDF>http://www.ajronline.org/content/197/6/W970.reprint</ArticleLinkPDF>\
            <FigsonlyLink>http://www.ajronline.org/content/197/6/W970.figsonly</FigsonlyLink>\
            <Caption>Fig. 8B â€”Air trapping in patient with acute exacerbation of asthma. B, Transverse inspiratory (A) and expiratory (B) CT images show mosaic attenuation in both upper lobes with marked accentuation at held expiration, More lucent lung parenchyma does not decrease in volume relative to adjacent normal lung on expiratory images.</Caption>\
            <ImageType>CT</ImageType>\
            <Date>2011-12-01</Date>\
            <SubscriptionStatus>n</SubscriptionStatus>\
          </Figure>\
        </Results>\
      </YottalookImages>\
    </YottalookWS>';
    
    var faked2 = '<?xml version="1.0" encoding="UTF-8"?>\
    <YottalookWS>\
      <YottalookImages>\
        <QueryResultInfo>\
          <Server_Status>23.253.64.143 - - [25/Oct/2015:03:46:24 +0000] "GET / HTTP/1.1" 200 &#13;\
    </Server_Status>\
          <app_id>4b94305d853d3e7c91ed4774aa428f75</app_id>\
          <OriginalQuery></OriginalQuery>\
          <QuerySuccess>Yes</QuerySuccess>\
          <TotalResults>10</TotalResults>\
          <XR>1</XR>\
          <MA>0</MA>\
          <CT>9</CT>\
          <MR>0</MR>\
          <NM>0</NM>\
          <US>0</US>\
          <MaxResultsPerQuery>5</MaxResultsPerQuery>\
        </QueryResultInfo>\
        </YottalookImages>\
      </YottalookWS>';
    
    /*
    if (sinceToken) {
      query = { since: sinceToken };
    }
    url = this.buildURL(type.modelName, null, null, 'findAll');
    return this.ajax(url, 'GET', { data: query });
    */
    console.log("Faked data : ", faked);
    var myObject = JXON.build(faked2);
    /*
    // Can't request directly as yottalook doesn't set proper CORS headers
    $.get( "http://www.yottalook.com/api_images_2_0.php?app_id=4b94305d853d3e7c91ed4774aa428f75&q=asthma&cl=50&t=yy", function(data, textStatus, jqXHR) {
      console.log("Recieved: ", data);
      console.log("textStatus: ", textStatus);
      console.log("jqXHR: ", jqXHR);
      
      //$( ".result" ).html( data );
      //alert( "Load was performed." );
    }, "jsonp xml");
    */
    return "";
  },
});
