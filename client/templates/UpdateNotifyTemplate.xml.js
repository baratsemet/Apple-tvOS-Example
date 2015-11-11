var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
        <alertTemplate>
            <title>欢迎使用Apple tvOS Exmaple</title>
            <description>您可以访问 http:\/\/blog.barat.cc了解详情</description>
            <button template = "${this.BASEURL}templates/LoadingTemplate.xml.js" presentation = "defaultPresenter">
                <text>确定</text>
            </button>
            <button template = "${this.BASEURL}templates/MainViewTemplate.xml.js" presentation = "defaultPresenter">
                <text>取消</text>
            </button>
      </alertTemplate>
    </document>`
}