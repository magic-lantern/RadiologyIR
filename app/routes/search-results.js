import Ember from 'ember';

export default Ember.Route.extend({
/* XML Sample result 

<Figure>
  <ResultID>1</ResultID>
  <ThumbLocalLink>http://www.yottalook.com/images/thumbnails/small/cf6539a170fe8de1b15f581563580182540bdbf2.jpg</ThumbLocalLink>
  <Source>AJR</Source>
  <FullFigureLink>http://www.ajronline.org/content/198/3/W217/F5.expansion.html</FullFigureLink>
  <ArticleTitle>Review: Inflammatory Pseudotumor: The Great Mimicker</ArticleTitle>
  <ArticleLink>http://www.ajronline.org/content/198/3/W217.full</ArticleLink>
  <ArticleLinkPDF>http://www.ajronline.org/content/198/3/W217.reprint</ArticleLinkPDF>
  <FigsonlyLink>http://www.ajronline.org/content/198/3/W217.figsonly</FigsonlyLink>
  <Caption>Fig. 4A —14-year-old girl with history of asthma. A,Axial (A)...</Caption>
  <ImageType>CT</ImageType>
  <Date>2012-03-01</Date>
  <SubscriptionStatus>n</SubscriptionStatus>
</Figure>

*/
  model() {
    this.store.createRecord('search-results', {
      resultID : 1,
      thumbLocalLink : "http://www.yottalook.com/images/thumbnails/small/cf6539a170fe8de1b15f581563580182540bdbf2.jpg",
      source : "AJR",
      fullFigureLink : "http://www.ajronline.org/content/198/3/W217/F5.expansion.html",
      articleTitle : "Review: Inflammatory Pseudotumor: The Great Mimicker",
      articleLink : "http://www.ajronline.org/content/198/3/W217.full",
      articleLinkPDF : "http://www.ajronline.org/content/198/3/W217.reprint",
      figsonlyLink : "http://www.ajronline.org/content/198/3/W217.figsonly",
      caption : "Fig. 4A —14-year-old girl with history of asthma. A,Axial (A)...",
      imageType : "CT",
      date : "2012-03-01",
      subscriptionStatus : "n"
    });
    //this.store.push('search-results', JSON.parse({
    this.store.createRecord('search-results', {
      resultID : 2,
      thumbLocalLink : "http://www.yottalook.com/images/thumbnails/small/cf6539a170fe8de1b15f581563580182540bdbf2.jpg",
      source : "AJR",
      fullFigureLink : "http://www.ajronline.org/content/198/3/W217/F5.expansion.html",
      articleTitle : "Review: Inflammatory Pseudotumor: The Great Mimicker",
      articleLink : "http://www.ajronline.org/content/198/3/W217.full",
      articleLinkPDF : "http://www.ajronline.org/content/198/3/W217.reprint",
      figsonlyLink : "http://www.ajronline.org/content/198/3/W217.figsonly",
      caption : "Fig. 4A —14-year-old girl with history of asthma. A,Axial (A)...",
      imageType : "CT",
      date : "2012-03-01",
      subscriptionStatus : "n"
    });
    console.log("this.store.all : ", typeof this.store.peekAll('search-results'));
    console.log("this.store.findAll : ", this.store.findAll('search-results'));
    return this.store.peekAll('search-results');
  }
});

/*    
  let searchresults = [
    {
      ResultID : 1,
      ThumbLocalLink : "http://www.yottalook.com/images/thumbnails/small/cf6539a170fe8de1b15f581563580182540bdbf2.jpg",
      Source : "AJR",
      FullFigureLink : "http://www.ajronline.org/content/198/3/W217/F5.expansion.html",
      ArticleTitle : "Review: Inflammatory Pseudotumor: The Great Mimicker",
      ArticleLink : "http://www.ajronline.org/content/198/3/W217.full",
      ArticleLinkPDF : "http://www.ajronline.org/content/198/3/W217.reprint",
      FigsonlyLink : "http://www.ajronline.org/content/198/3/W217.figsonly",
      Caption : "Fig. 4A —14-year-old girl with history of asthma. A,Axial (A)...",
      ImageType : "CT",
      Date : "2012-03-01",
      SubscriptionStatus : "n"
    },
    {
      ResultID : 2,
      ThumbLocalLink : "http://www.yottalook.com/images/thumbnails/small/cf6539a170fe8de1b15f581563580182540bdbf2.jpg",
      Source : "AJR",
      FullFigureLink : "http://www.ajronline.org/content/198/3/W217/F5.expansion.html",
      ArticleTitle : "Review: Inflammatory Pseudotumor: The Great Mimicker",
      ArticleLink : "http://www.ajronline.org/content/198/3/W217.full",
      ArticleLinkPDF : "http://www.ajronline.org/content/198/3/W217.reprint",
      FigsonlyLink : "http://www.ajronline.org/content/198/3/W217.figsonly",
      Caption : "Fig. 4A —14-year-old girl with history of asthma. A,Axial (A)...",
      ImageType : "CT",
      Date : "2012-03-01",
      SubscriptionStatus : "n"
    }];
    return searchresults;
  }
});
*/
