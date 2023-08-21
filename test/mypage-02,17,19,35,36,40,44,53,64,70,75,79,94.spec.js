const { test, expect } = require("ceruleoscope");

// Using test in local. If the test is local, then leave the comment
let appInsights = require("applicationinsights");
appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY);
appInsights.start();

// Create 30 user test
const user = [{ username: 'usertest1@systemgear-vietnam.com', password: '12345'}, 
                { username: 'usertest2@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest3@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest4@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest5@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest6@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest7@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest8@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest9@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest10@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest11@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest12@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest13@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest14@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest15@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest16@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest17@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest18@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest19@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest20@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest21@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest22@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest23@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest24@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest25@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest26@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest27@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest28@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest29@systemgear-vietnam.com', password: '12345'},
                { username: 'usertest30@systemgear-vietnam.com', password: '12345'},
            ];

// Use for loop to test 30 users sequentially 
for (let index = 0; index < 30; index++) { 
    test('mypage_02_' + index, async ({ page }) => {

        await page.goto('https://sunset-moment.com/password');
        await page.getByRole('link', { name: 'パスワードを入力してください' }).click();
        await page.getByPlaceholder('あなたのパスワード').click();
        await page.getByPlaceholder('あなたのパスワード').fill('veulte');
        await page.getByRole('button', { name: '入力する' }).click();

        await page.goto('https://sunset-moment.com/account/login');
        await page.getByRole('textbox', { name: 'メールアドレス' }).click();

         // Insert user name
        await page.getByRole('textbox', { name: 'メールアドレス' }).fill(user[index].username);
        await page.getByRole('textbox', { name: 'メールアドレス' }).press('Tab');

         // Insert password
        await page.getByLabel('パスワード').fill(user[index].password);
        await page.getByRole('button', { name: 'ログイン' }).click();

        // Set url go to screen ItemSetting
        await page.goto('https://sunset-moment.com/pages/pl_test');
        await page.frameLocator('iframe[title="ポロシャツ \\[Dev\\]"]').getByRole('button', { name: 'デザインを開始' }).click();

        // Set image pattern
        let input = await page.frameLocator('iframe[title="ポロシャツ \\[Dev\\]"]').locator("#upload-button");
        await input.setInputFiles('./Img/image_02.png');

        await page.frameLocator('iframe[title="ポロシャツ \\[Dev\\]"]').getByText('なお、弊社における審査は、ユーザー様から提供されたコンテンツが第三者の知的財産権その他の権利利益を侵害しないことを保証するものではなく、万が一事後的に第三者の知').click();
        await page.frameLocator('iframe[title="ポロシャツ \\[Dev\\]"]').locator('div').filter({ hasText: /^$/ }).click();
        await page.frameLocator('iframe[title="ポロシャツ \\[Dev\\]"]').getByRole('button', { name: 'デザイン作成へ進む' }).click();
        await page.frameLocator('iframe[title="ポロシャツ \\[Dev\\]"]').getByRole('button', { name: 'OK' }).click();
        await page.frameLocator('iframe[title="ポロシャツ \\[Dev\\]"]').getByRole('button', { name: 'サイズと数量選択へ進む' }).click();
        await page.frameLocator('iframe[title="ポロシャツ \\[Dev\\]"]').locator('div').filter({ hasText: /^M$/ }).getByRole('spinbutton').click();
        await page.frameLocator('iframe[title="ポロシャツ \\[Dev\\]"]').locator('div').filter({ hasText: /^M$/ }).getByRole('spinbutton').fill('01');
        await page.frameLocator('iframe[title="ポロシャツ \\[Dev\\]"]').getByRole('button', { name: 'カートに追加して別のデザインを作成' }).click();

        // Set url go to screen Cart
        await page.goto('https://sunset-moment.com/pages/cart-dev');
        await page.frameLocator('iframe[title="ショッピングカート - Dev"]').locator('div:nth-child(3) > .checkbox_item_cart > .ms-Checkbox > .ms-Checkbox-label > .ms-Checkbox-checkbox > .ms-Checkbox-checkmark').click();
    });
}
