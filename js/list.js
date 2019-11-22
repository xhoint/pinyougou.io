

// 根据得到的数据，创建商品列表

$(() => {
    // 准备一个字符串，把所有商品结构以字符串的形式表达出来
    let html ;
    // 遍历数组，生成商品列表
    phoneData.forEach(e => {
        // 生成结构
        html += `<li class="goods-list-item">
        <a href="detail.html">
          <div class="item-img">
            <img src="${e.imgSrc}" alt="">
            
          </div>
          <div class="item-title">
            ${e.name}
          </div>
          <div class="item-price">
            <span class="now">¥${e.price}</span> 
          </div>
          <div class="sold">
            <span> 已售 <em>${e.percent}% </em></span>
            <div class="scroll">
              <div class="per"></div>
            </div>
            <span>剩余<i>${e.left}</i>件</span>
          </div>
        </a>
        <a href="#" class="buy">
          查看详情
        </a>
      </li>`
    })
    $('.goods-list >ul').append(html);
});
