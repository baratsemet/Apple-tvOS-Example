var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
      .whiteText {
        color: rgb(255, 255, 255);
      }
      </style>
    </head>
    <catalogTemplate>
      <banner>
        <title>Apple tvOS Example</title>
      </banner>
      <list>
        <section>
          <header>
            <title>Apple tvOS开发</title>
          </header>

          <listItemLockup>
            <title>什么是TVML</title>
            <decorationLabel>3</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup videoURL="http://www.rwdevcon.com/videos/Ray-Wenderlich-Teamwork.mp4">
                    <img src="${this.BASEURL}resources/images/music/music_1.lcr" width="308" height="308" />
                    <title class="whiteText">Title 1</title>
                  </lockup>
                  <lockup videoURL="http://www.rwdevcon.com/videos/Ray-Wenderlich-Teamwork.mp4">
                    <img src="${this.BASEURL}resources/images/music/music_2.lcr" width="308" height="308" />
                    <title class="whiteText">Title 2</title>
                  </lockup>
                  <lockup videoURL="http://www.rwdevcon.com/videos/Ray-Wenderlich-Teamwork.mp4">
                    <img src="${this.BASEURL}resources/images/music/music_3.lcr" width="308" height="308" />
                    <title class="whiteText">Title 3</title>
                  </lockup>                  
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>

          <listItemLockup>
            <title>什么是TVJS</title>
            <decorationLabel>2</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup videoURL="http://www.rwdevcon.com/videos/Ray-Wenderlich-Teamwork.mp4">
                    <img src="${this.BASEURL}resources/images/music/music_1.lcr" width="308" height="308" />
                    <title class="whiteText">Title 1</title>
                  </lockup>
                  <lockup videoURL="http://www.rwdevcon.com/videos/Ray-Wenderlich-Teamwork.mp4">
                    <img src="${this.BASEURL}resources/images/music/music_2.lcr" width="308" height="308" />
                    <title class="whiteText">Title 2</title>
                  </lockup>                  
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>          
        </section>
      </list>
    </catalogTemplate>
  </document>`
}