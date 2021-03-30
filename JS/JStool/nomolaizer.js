/*
 * @Author: your name
 * @Date: 2021-03-08 01:17:01
 * @LastEditTime: 2021-03-08 01:22:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/JStool/nomolaizer.js
 */
/*
 * @Author: your name
 * @Date: 2021-03-08 00:28:16
 * @LastEditTime: 2021-03-08 01:14:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/遍历/check.js
 */
import pkg from 'normalizr';
const { normalize, schema } = pkg;

const originalData = {
    "id": "123",
    "author": {
      "id": "1",
      "name": "Paul"
    },
    "title": "My awesome blog post",
    "comments": [
      {
        "id": "324",
        "commenter": {
          "id": "2",
          "name": "Nicole"
        }
      }
    ]
  }

// Define a users schema
const user = new schema.Entity('user');

// Define your comments schema
const comment = new schema.Entity('comme', {
  commenter: user
});

// Define your article
const article = new schema.Entity('articles', {
  author: user,  //属性名字是去原型中schema的很重要 //第一个入参不重要
  comments: [comment]
});

const normalizedData = normalize(originalData, article);

console.log(normalizedData)