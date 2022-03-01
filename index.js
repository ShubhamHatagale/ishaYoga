const { SiteClient } = require('datocms-client');
const client = new SiteClient('7245267823d1bf87795f5505eeeb4c');
var mysql = require('mysql2');
var WPAPI = require('wpapi');
var WP = require('wordpress-rest-api');
var axios = require('axios');
// var pd = require('./pd')
// const { json } = require('body-parser');
var express = require("express");
const { checkout } = require('superagent');
var app = express();
const { uuid } = require('uuidv4');
var syncLoop = require('sync-loop');
// var fetch = require('node-fetch');
const request = require("request");


// d36585bd-6bc7-4969-8999-ee3cdee71fe9

// const LanguageDetect = require('languagedetect');
// const lngDetector = new LanguageDetect();
// console.log(uuid());

var imageRegex1 = /(https?:\/\/.*\.(?:jpg|jpeg|gif|png|webp|svg|doc|docx|pdf|xls|xlsx))/gi;
var imageRegex = /(src)\s*=\s*("|')([^\s]+[^/]+.[^\s]+.(jpg|jpeg|gif|png|webp|svg|docx|pdf|xls|xlsx))("|')/;

app.listen(3000, () => {
	console.log("Server running on port 3000");
});



// var numberOfLoop = 10;
// syncLoop(numberOfLoop, async (loop) => {
// 	// syncLoop(numberOfLoop, function (loop) {
// 	console.log(loop)
// 	// loop body
// 	var i = loop.iteration(); // i of loop, value from 0 to (numberOfLoop - 1)
// 	console.log(i)
// 	console.log("set_Ti")
// 	var ddC=await sleep(5000);
// 	console.log(ddC)
// 	// await sleep2();
// 	// await sleep3();
// 	console.log("set_Time 5000")

// 	let match_youtube = [0, 0, 0, 0, 0];
// 	await syncLoop(match_youtube.length, async (youtube_loop) => {
// 		let youtube_index = youtube_loop.iteration();
// 		console.log("youtube_loop")
// 		loop.next();

// 	})

// }, function () {
// 	console.log("This is function finish")
// });

function doAsyncJob(params) {
	console.log("doAsyncJob")
}

app.get("/url", (req, res, next) => {
	res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "db12",
	database: "ishaMaha"
});



const clearConsole = app.get("/to_datocmsc", (req, res, next) => {
	console.log('\033c')
})



const Data = app.get("/to_datocms", (req, res, next) => {
	var arr = [21, 13, 61]
	con.connect(function (err) {
		if (err) throw err;
		// con.query("SELECT distinct ishaMaha.wp_posts.menu_order from ishaMaha.wp_posts INNER JOIN ishaMaha.wp_yoast_indexable ON wp_posts.ID=wp_yoast_indexable.object_id WHERE wp_posts.post_type='page' AND wp_posts.post_status='publish' AND wp_posts.menu_order!=0 AND (wp_posts.post_parent=253 OR wp_posts.post_parent=2633 OR wp_posts.post_parent=1716 OR wp_posts.post_parent=7966 OR wp_posts.post_parent=6814 OR wp_posts.post_parent=9040 OR wp_posts.post_parent=28567)", function (err, mo_result, fields) {
		con.query("SELECT distinct ishaMaha.wp_posts.menu_order from ishaMaha.wp_posts INNER JOIN ishaMaha.wp_yoast_indexable ON wp_posts.ID=wp_yoast_indexable.object_id INNER JOIN ishaMaha.wp_term_relationships ON wp_yoast_indexable.object_id=wp_term_relationships.object_id INNER JOIN ishaMaha.wp_terms ON wp_term_relationships.term_taxonomy_id=wp_terms.term_id WHERE wp_terms.term_id IN(78, 123, 117, 1176,2224,247,254,250,1124) AND wp_posts.post_type='page' AND wp_posts.post_status='publish' AND wp_posts.menu_order!=0 AND (wp_posts.post_parent=253 OR wp_posts.post_parent=2633 OR wp_posts.post_parent=1716 OR wp_posts.post_parent=7966 OR wp_posts.post_parent=6814 OR wp_posts.post_parent=9040 OR wp_posts.post_parent=28567)", function (err, mo_result, fields) {
			if (err) throw err;
			console.log(mo_result.length);
			var menu_order_length = mo_result.length;

			syncLoop(menu_order_length, async (moiLoop) => {
				let m_oi = moiLoop.iteration();
				var featureUplId2;
				// console.log("Node Id", mo_result[m_oi].menu_order);

				con.query(`SELECT * FROM ishaMaha.wp_posts INNER JOIN ishaMaha.wp_yoast_indexable ON wp_posts.ID=wp_yoast_indexable.object_id where wp_posts.menu_order!=0 AND wp_posts.menu_order=${mo_result[m_oi].menu_order} AND wp_posts.post_type='page' AND wp_posts.post_excerpt!='' AND wp_posts.post_status='publish' AND (wp_posts.post_parent=253 OR wp_posts.post_parent=2633 OR wp_posts.post_parent=1716 OR wp_posts.post_parent=7966 OR wp_posts.post_parent=6814 OR wp_posts.post_parent=9040 OR wp_posts.post_parent=28567)`, function (err, rec_result, fields) {
					if (err) throw err;
					if (rec_result != "") {

						con.query(`SELECT * FROM ishaMaha.wp_posts where post_parent=${rec_result[0].ID} AND post_type="attachment" ORDER BY ID DESC`, async function (err, card_img_result, fields) {
							if (card_img_result != "") {
								// console.log(card_img_result[0].guid)
								var links = card_img_result[0].guid;
								console.log(links)
								featureUplId2 = await uploadFeatureImg(links)

							} else {
								featureUplId2 = await uploadFeatureImg(rec_result[0].twitter_image)

							}
							console.log(featureUplId2)

							// console.log(rec_result.length);
							// console.log(rec_result);
							var itemType = "1637301"; // id of wisdom_content

							var rec_result_length = rec_result.length;
							const wpDate = rec_result[0].post_date;
							const men_ord = rec_result[0].menu_order;
							console.log(featureUplId2)

							// console.log(rec_result[m_oi])
							var node_obj = {
								itemType: itemType,
								"uuid": uuid(),
								"wpid": {},
								"seoFields": {},
								"title": {},
								"order": men_ord,
								"template": {},
								"types": {},
								"permalink": {},
								"heroImage": {},
								"cardImage": {},
								"description": {},
								"selectTopic": {},
								"redirectUrl": {},
								"videoUrl": {},
								"publishDate": {},
								"parents": {},
								"mediaEmbed": {},
								"updatedAt": wpDate,
								"createdAt": wpDate,
								"meta": {
									"createdAt": wpDate,
									"updatedAt": wpDate,
									"publishedAt": wpDate,
									"firstPublishedAt": wpDate,
									"publicationScheduledAt": null,
									"unpublishingScheduledAt": null,
									"status": 'published',
									"isValid": true,
									"currentVersion": '216284933',
									"stage": null
								},
								"canonicalUrl": {}

							}

							syncLoop(rec_result_length, async (reciLoop) => {

								console.log(featureUplId2)

								var rec_oi = reciLoop.iteration();
								// console.log(rec_result[rec_oi].ID);
								// const featureUplId2;

								var loopCount;
								var UPL_ID;
								const wpid = rec_result[rec_oi].ID;
								const timeElapsed = Date.now();
								const today = new Date(timeElapsed);
								var created_onu = today.toISOString();
								const UUID = rec_result[rec_oi].post_author + "";
								var loopCountCheck = rec_result[rec_oi].length;
								var imageRegex1 = /(https?:\/\/.*\.(?:jpg|jpeg|gif|png|webp|svg|doc|docx|pdf|xls|xlsx))/ui;
								// var imageRegex1 = /(https?:\/\/.*\.(?:jpg|jpeg|gif|png|webp|svg|doc|docx|pdf|xls|xlsx))/gi;
								var imageRegex = /(src)\s*=\s*("|')([^\s]+[^/]+.[^\s]+.(jpg|jpeg|gif|png|webp|svg|docx|pdf|xls|xlsx))("|')/gi;
								var itemType = "1637301"; // id of wisdom_content
								// const featureUplId2 = await featureUplId2_fn(rec_result[rec_oi].ID)
								const featureUplId = await uploadFeatureImg(rec_result[rec_oi].twitter_image)
								const cat_type = await postParent(rec_result[rec_oi].post_parent)

								let u_iid = rec_oi + 1;
								// console.log(resByMenuOrder[r].title+ "!= "+"" +"||"+ resByMenuOrder[r].description+ "!= "+"")
								// console.log(resByMenuOrder[r].title +"==="+ "" +"&&"+ resByMenuOrder[r].description +"==="+ "" +"&&"+ resByMenuOrder[r].post_content.includes("www.youtube.com"))
								let content_type = await contentType(rec_result[rec_oi].title, rec_result[rec_oi].description, rec_result[rec_oi].post_content)
								if (rec_result[rec_oi].permalink.indexOf("/hi") >= 0) {
									let imgSplt = rec_result[rec_oi].post_content;
									let arr1 = imgSplt.split("src")
									let arrlen = arr1.length;
									let objExp = {};

									for (let dd = 0; dd < arrlen; dd++) {
										let tt = imageRegex1.exec(arr1[dd]);
										// console.log(tt)
										if (tt) {
											let isha_img_link = tt[0].split('" ');
											let upl = await uploadImg(isha_img_link[0])
											objExp[isha_img_link[0]] = upl;
										}
									}
									if (Object.keys(objExp).length > 0) {
										let re = new RegExp(Object.keys(objExp).join("|"), "gi");
										imgSplt = await imgSplt.replace(re, function (matched) {
											// console.log(objExp[matched])
											return objExp[matched];
										});
									}
									// console.log(imgSplt)
									node_obj.wpid['hi-IN'] = rec_result[rec_oi].ID + "";
									node_obj.seoFields['hi-IN'] = {
										image: featureUplId,
										title: rec_result[rec_oi].title,
										description: rec_result[rec_oi].post_excerpt,
										twitterCard: 'summary_large_image'
									}
									node_obj.parents['hi-IN'] = rec_result[rec_oi].post_parent + " ";
									node_obj.template['hi-IN'] = rec_result[rec_oi].post_type;
									node_obj.types['hi-IN'] = content_type;
									node_obj.permalink['hi-IN'] = rec_result[rec_oi].post_name;
									node_obj.heroImage['hi-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId
									}
									node_obj.cardImage['hi-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId2
									}
									node_obj.description['hi-IN'] = imgSplt;
									node_obj.title['hi-IN'] = rec_result[rec_oi].post_title;
									node_obj.selectTopic['hi-IN'] = cat_type;
									node_obj.redirectUrl['hi-IN'] = '';
									node_obj.videoUrl['hi-IN'] = '';
									node_obj.publishDate['hi-IN'] = rec_result[rec_oi].post_date;
									node_obj.mediaEmbed['hi-IN'] = [];
									node_obj.canonicalUrl['hi-IN'] = rec_result[rec_oi].canonical;

								} else if (rec_result[rec_oi].permalink.indexOf("/ta") >= 0) {

									let imgSplt = rec_result[rec_oi].post_content;
									let arr1 = await imgSplt.split("src")
									let arrlen = await arr1.length;
									let objExp = {};

									for (let dd = 0; dd < arrlen; dd++) {
										let tt = imageRegex1.exec(arr1[dd]);
										// console.log(tt)
										if (tt) {
											let isha_img_link = tt[0].split('" ');
											let upl = await uploadImg(isha_img_link[0])
											objExp[isha_img_link[0]] = upl;

										}

									}
									if (Object.keys(objExp).length > 0) {
										let re = new RegExp(Object.keys(objExp).join("|"), "gi");
										imgSplt = await imgSplt.replace(re, function (matched) {
											// console.log(objExp[matched])
											return objExp[matched];
										});
									}
									node_obj.wpid['ta-IN'] = rec_result[rec_oi].ID + "";
									node_obj.seoFields['ta-IN'] = {
										image: featureUplId,
										title: rec_result[rec_oi].title,
										description: rec_result[rec_oi].post_excerpt,
										twitterCard: 'summary_large_image'
									}
									node_obj.parents['ta-IN'] = rec_result[rec_oi].post_parent + " ";
									node_obj.template['ta-IN'] = rec_result[rec_oi].post_type;
									node_obj.types['ta-IN'] = content_type;
									node_obj.permalink['ta-IN'] = rec_result[rec_oi].post_name;
									node_obj.heroImage['ta-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId
									}
									node_obj.cardImage['ta-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId2
									}
									node_obj.description['ta-IN'] = imgSplt;
									node_obj.title['ta-IN'] = rec_result[rec_oi].post_title;
									node_obj.selectTopic['ta-IN'] = cat_type;
									node_obj.redirectUrl['ta-IN'] = '';
									node_obj.videoUrl['ta-IN'] = '';
									node_obj.publishDate['ta-IN'] = rec_result[rec_oi].post_date;
									node_obj.mediaEmbed['ta-IN'] = [];
									node_obj.canonicalUrl['ta-IN'] = rec_result[rec_oi].canonical;



								} else if (rec_result[rec_oi].permalink.indexOf("/kn") >= 0) {

									let imgSplt = rec_result[rec_oi].post_content;
									let arr1 = await imgSplt.split("src")
									let arrlen = await arr1.length;
									let objExp = {};

									for (let dd = 0; dd < arrlen; dd++) {
										let tt = imageRegex1.exec(arr1[dd]);
										// console.log(tt)
										if (tt) {
											let isha_img_link = tt[0].split('" ');
											let upl = await uploadImg(isha_img_link[0])
											objExp[isha_img_link[0]] = upl;

										}

									}
									if (Object.keys(objExp).length > 0) {
										let re = new RegExp(Object.keys(objExp).join("|"), "gi");
										imgSplt = await imgSplt.replace(re, function (matched) {
											// console.log(objExp[matched])
											return objExp[matched];
										});
									}
									node_obj.wpid['kn-IN'] = rec_result[rec_oi].ID + "";
									node_obj.seoFields['kn-IN'] = {
										image: featureUplId,
										title: rec_result[rec_oi].title,
										description: rec_result[rec_oi].post_excerpt,
										twitterCard: 'summary_large_image'
									}
									node_obj.parents['kn-IN'] = rec_result[rec_oi].post_parent + " ";
									node_obj.template['kn-IN'] = rec_result[rec_oi].post_type;
									node_obj.types['kn-IN'] = content_type;
									node_obj.permalink['kn-IN'] = rec_result[rec_oi].post_name;
									node_obj.heroImage['kn-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId
									}
									node_obj.cardImage['kn-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId2
									}
									node_obj.description['kn-IN'] = imgSplt;
									node_obj.title['kn-IN'] = rec_result[rec_oi].post_title;
									node_obj.selectTopic['kn-IN'] = cat_type;
									node_obj.redirectUrl['kn-IN'] = '';
									node_obj.videoUrl['kn-IN'] = '';
									node_obj.publishDate['kn-IN'] = rec_result[rec_oi].post_date;
									node_obj.mediaEmbed['kn-IN'] = [];
									node_obj.canonicalUrl['kn-IN'] = rec_result[rec_oi].canonical;



								} else if (rec_result[rec_oi].permalink.indexOf("/mr") >= 0) {

									let imgSplt = rec_result[rec_oi].post_content;
									let arr1 = await imgSplt.split("src")
									let arrlen = await arr1.length;
									let objExp = {};

									for (let dd = 0; dd < arrlen; dd++) {
										let tt = imageRegex1.exec(arr1[dd]);
										// console.log(tt)
										if (tt) {
											let isha_img_link = tt[0].split('" ');
											let upl = await uploadImg(isha_img_link[0])
											objExp[isha_img_link[0]] = upl;

										}

									}
									if (Object.keys(objExp).length > 0) {
										let re = new RegExp(Object.keys(objExp).join("|"), "gi");
										imgSplt = await imgSplt.replace(re, function (matched) {
											// console.log(objExp[matched])
											return objExp[matched];
										});
									}
									node_obj.wpid['mr-IN'] = rec_result[rec_oi].ID + "";
									node_obj.seoFields['mr-IN'] = {
										image: featureUplId,
										title: rec_result[rec_oi].title,
										description: rec_result[rec_oi].post_excerpt,
										twitterCard: 'summary_large_image'
									}
									node_obj.parents['mr-IN'] = rec_result[rec_oi].post_parent + " ";
									node_obj.template['mr-IN'] = rec_result[rec_oi].post_type;
									node_obj.types['mr-IN'] = content_type;
									node_obj.permalink['mr-IN'] = rec_result[rec_oi].post_name;
									node_obj.heroImage['mr-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId
									}
									node_obj.cardImage['mr-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId2
									}
									node_obj.description['mr-IN'] = imgSplt;
									node_obj.title['mr-IN'] = rec_result[rec_oi].post_title;
									node_obj.selectTopic['mr-IN'] = cat_type;
									node_obj.redirectUrl['mr-IN'] = '';
									node_obj.videoUrl['mr-IN'] = '';
									node_obj.publishDate['mr-IN'] = rec_result[rec_oi].post_date;
									node_obj.mediaEmbed['mr-IN'] = [];
									node_obj.canonicalUrl['mr-IN'] = rec_result[rec_oi].canonical;



								} else if (rec_result[rec_oi].permalink.indexOf("/ne") >= 0) {

									let imgSplt = rec_result[rec_oi].post_content;
									let arr1 = await imgSplt.split("src")
									let arrlen = await arr1.length;
									let objExp = {};

									for (let dd = 0; dd < arrlen; dd++) {
										let tt = imageRegex1.exec(arr1[dd]);
										// console.log(tt)
										if (tt) {
											let isha_img_link = tt[0].split('" ');
											let upl = await uploadImg(isha_img_link[0])
											objExp[isha_img_link[0]] = upl;

										}

									}
									if (Object.keys(objExp).length > 0) {
										let re = new RegExp(Object.keys(objExp).join("|"), "gi");
										imgSplt = await imgSplt.replace(re, function (matched) {
											// console.log(objExp[matched])
											return objExp[matched];
										});
									}
									node_obj.wpid['ne-IN'] = rec_result[rec_oi].ID + "";
									node_obj.seoFields['ne-IN'] = {
										image: featureUplId,
										title: rec_result[rec_oi].title,
										description: rec_result[rec_oi].post_excerpt,
										twitterCard: 'summary_large_image'
									}
									node_obj.parents['ne-IN'] = rec_result[rec_oi].post_parent + " ";
									node_obj.template['ne-IN'] = rec_result[rec_oi].post_type;
									node_obj.types['ne-IN'] = content_type;
									node_obj.permalink['ne-IN'] = rec_result[rec_oi].post_name;
									node_obj.heroImage['ne-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId
									}
									node_obj.cardImage['ne-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId2
									}
									node_obj.description['ne-IN'] = imgSplt;
									node_obj.title['ne-IN'] = rec_result[rec_oi].post_title;
									node_obj.selectTopic['ne-IN'] = cat_type;
									node_obj.redirectUrl['ne-IN'] = '';
									node_obj.videoUrl['ne-IN'] = '';
									node_obj.publishDate['ne-IN'] = rec_result[rec_oi].post_date;
									node_obj.mediaEmbed['ne-IN'] = [];
									node_obj.canonicalUrl['ne-IN'] = rec_result[rec_oi].canonical;




								} else if (rec_result[rec_oi].permalink.indexOf("/bn") >= 0) {
									let imgSplt = rec_result[rec_oi].post_content;
									let arr1 = await imgSplt.split("src")
									let arrlen = await arr1.length;
									let objExp = {};

									for (let dd = 0; dd < arrlen; dd++) {
										let tt = imageRegex1.exec(arr1[dd]);
										// console.log(tt)
										if (tt) {
											let isha_img_link = tt[0].split('" ');
											let upl = await uploadImg(isha_img_link[0])
											objExp[isha_img_link[0]] = upl;

										}

									}
									if (Object.keys(objExp).length > 0) {
										let re = new RegExp(Object.keys(objExp).join("|"), "gi");
										imgSplt = await imgSplt.replace(re, function (matched) {
											// console.log(objExp[matched])
											return objExp[matched];
										});
									}
									node_obj.wpid['bn-IN'] = rec_result[rec_oi].ID + "";
									node_obj.seoFields['bn-IN'] = {
										image: featureUplId,
										title: rec_result[rec_oi].title,
										description: rec_result[rec_oi].post_excerpt,
										twitterCard: 'summary_large_image'
									}
									node_obj.parents['bn-IN'] = rec_result[rec_oi].post_parent + " ";
									node_obj.template['bn-IN'] = rec_result[rec_oi].post_type;
									node_obj.types['bn-IN'] = content_type;
									node_obj.permalink['bn-IN'] = rec_result[rec_oi].post_name;
									node_obj.heroImage['bn-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId
									}
									node_obj.cardImage['bn-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId2
									}
									node_obj.description['bn-IN'] = imgSplt;
									node_obj.title['bn-IN'] = rec_result[rec_oi].post_title;
									node_obj.selectTopic['bn-IN'] = cat_type;
									node_obj.redirectUrl['bn-IN'] = '';
									node_obj.videoUrl['bn-IN'] = '';
									node_obj.publishDate['bn-IN'] = rec_result[rec_oi].post_date;
									node_obj.mediaEmbed['bn-IN'] = [];
									node_obj.canonicalUrl['bn-IN'] = rec_result[rec_oi].canonical;



								} else if (rec_result[rec_oi].permalink.indexOf("/gu") >= 0) {

									let imgSplt = rec_result[rec_oi].post_content;
									let arr1 = await imgSplt.split("src")
									let arrlen = await arr1.length;
									let objExp = {};

									for (let dd = 0; dd < arrlen; dd++) {
										let tt = imageRegex1.exec(arr1[dd]);
										// console.log(tt)
										if (tt) {
											let isha_img_link = tt[0].split('" ');
											let upl = await uploadImg(isha_img_link[0])
											objExp[isha_img_link[0]] = upl;

										}

									}
									if (Object.keys(objExp).length > 0) {
										let re = new RegExp(Object.keys(objExp).join("|"), "gi");
										imgSplt = await imgSplt.replace(re, function (matched) {
											// console.log(objExp[matched])
											return objExp[matched];
										});
									}
									node_obj.wpid['gu-IN'] = rec_result[rec_oi].ID + "";
									node_obj.seoFields['gu-IN'] = {
										image: featureUplId,
										title: rec_result[rec_oi].title,
										description: rec_result[rec_oi].post_excerpt,
										twitterCard: 'summary_large_image'
									}
									node_obj.parents['gu-IN'] = rec_result[rec_oi].post_parent + " ";
									node_obj.template['gu-IN'] = rec_result[rec_oi].post_type;
									node_obj.types['gu-IN'] = content_type;
									node_obj.permalink['gu-IN'] = rec_result[rec_oi].post_name;
									node_obj.heroImage['gu-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId
									}
									node_obj.cardImage['gu-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId2
									}
									node_obj.description['gu-IN'] = imgSplt;
									node_obj.title['gu-IN'] = rec_result[rec_oi].post_title;
									node_obj.selectTopic['gu-IN'] = cat_type;
									node_obj.redirectUrl['gu-IN'] = '';
									node_obj.videoUrl['gu-IN'] = '';
									node_obj.publishDate['gu-IN'] = rec_result[rec_oi].post_date;
									node_obj.mediaEmbed['gu-IN'] = [];
									node_obj.canonicalUrl['gu-IN'] = rec_result[rec_oi].canonical;



								} else if (rec_result[rec_oi].permalink.indexOf("/ml") >= 0) {

									let imgSplt = rec_result[rec_oi].post_content;
									let arr1 = imgSplt.split("src")
									let arrlen = arr1.length;
									let objExp = {};

									for (let dd = 0; dd < arrlen; dd++) {
										let tt = imageRegex1.exec(arr1[dd]);
										// console.log(tt)
										if (tt) {
											let isha_img_link = tt[0].split('" ');
											let upl = await uploadImg(isha_img_link[0])
											objExp[isha_img_link[0]] = upl;

										}

									}
									if (Object.keys(objExp).length > 0) {
										let re = new RegExp(Object.keys(objExp).join("|"), "gi");
										imgSplt = await imgSplt.replace(re, function (matched) {
											// console.log(objExp[matched])
											return objExp[matched];
										});
									}
									node_obj.wpid['ml-IN'] = rec_result[rec_oi].ID + "";
									node_obj.seoFields['ml-IN'] = {
										image: featureUplId,
										title: rec_result[rec_oi].title,
										description: rec_result[rec_oi].post_excerpt,
										twitterCard: 'summary_large_image'
									}
									node_obj.parents['ml-IN'] = rec_result[rec_oi].post_parent + " ";
									node_obj.template['ml-IN'] = rec_result[rec_oi].post_type;
									node_obj.types['ml-IN'] = content_type;
									node_obj.permalink['ml-IN'] = rec_result[rec_oi].post_name;
									node_obj.heroImage['ml-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId
									}
									node_obj.cardImage['ml-IN'] = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId2
									}
									node_obj.description['ml-IN'] = imgSplt;
									node_obj.title['ml-IN'] = rec_result[rec_oi].post_title;
									node_obj.selectTopic['ml-IN'] = cat_type;
									node_obj.redirectUrl['ml-IN'] = '';
									node_obj.videoUrl['ml-IN'] = '';
									node_obj.publishDate['ml-IN'] = rec_result[rec_oi].post_date;
									node_obj.mediaEmbed['ml-IN'] = [];
									node_obj.canonicalUrl['ml-IN'] = rec_result[rec_oi].canonical;



								} else {
									let imgSplt = rec_result[rec_oi].post_content;
									let arr1 = await imgSplt.split("src")
									let arrlen = await arr1.length;
									let objExp = {};

									for (let dd = 0; dd < arrlen; dd++) {
										let tt = imageRegex1.exec(arr1[dd]);
										// console.log(tt)
										if (tt) {
											let isha_img_link = tt[0].split('" ');
											let upl = await uploadImg(isha_img_link[0])
											objExp[isha_img_link[0]] = upl;

										}

									}
									if (Object.keys(objExp).length > 0) {
										let re = new RegExp(Object.keys(objExp).join("|"), "gi");
										imgSplt = imgSplt.replace(re, function (matched) {
											// console.log(objExp[matched])
											return objExp[matched];
										});
									}
									node_obj.wpid.en = rec_result[rec_oi].ID + "";
									node_obj.seoFields.en = {
										image: featureUplId,
										title: rec_result[rec_oi].title,
										description: rec_result[rec_oi].post_excerpt,
										twitterCard: 'summary_large_image'
									}
									node_obj.parents.en = rec_result[rec_oi].post_parent + " ";
									node_obj.template.en = rec_result[rec_oi].post_type;
									node_obj.types.en = content_type;
									node_obj.permalink.en = rec_result[rec_oi].post_name;
									node_obj.heroImage.en = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId
									}
									node_obj.cardImage.en = {
										alt: null,
										title: null,
										customData: {},
										focalPoint: null,
										uploadId: featureUplId2
									}
									node_obj.description.en = imgSplt;
									node_obj.title.en = rec_result[rec_oi].post_title;
									node_obj.selectTopic.en = cat_type;
									node_obj.redirectUrl.en = '';
									node_obj.videoUrl.en = '';
									node_obj.publishDate.en = rec_result[rec_oi].post_date;
									// node_obj.slug.en = rec_result[rec_oi].post_name;
									node_obj.mediaEmbed.en = [];
									node_obj.canonicalUrl.en = rec_result[rec_oi].canonical;
									// console.log("node_obj")
									// console.log(node_obj)


								}

								reciLoop.next()



							}, async function () {
								console.log("if else condition finished")
								console.log("node_obj")
								// console.log(node_obj)
								var get_datoCms = await getDataOfdatoCms(node_obj.order);
								// console.log(get_datoCms)

								if (get_datoCms.length === 0) {
									console.log("new record")
									if (Object.keys(node_obj).length > 0) {

										const record = await client.items.create(node_obj);
										if (record.id) {
											let pubRec = await run(record.id);

										}
										moiLoop.next()
									}

								}
								else {
									try {
										console.log("same record" + get_datoCms[0].id)
										console.log(node_obj.title)
										// uuid:'067a2629-068b-49c5-8651-a0a1f128c18c'
										const record_upd = await client.items.update(get_datoCms[0].id, {
											uuid: node_obj.uuid,
											wpid: node_obj.wpid,
											seoFields: node_obj.seoFields,
											title: node_obj.title,
											order: node_obj.order,
											template: node_obj.template,
											types: node_obj.types,
											permalink: node_obj.permalink,
											heroImage: node_obj.heroImage,
											cardImage: node_obj.cardImage,
											description: node_obj.description,
											selectTopic: node_obj.selectTopic,
											redirectUrl: node_obj.redirectUrl,
											videoUrl: node_obj.videoUrl,
											publishDate: node_obj.publishDate,
											parents: node_obj.parents,
											mediaEmbed: node_obj.mediaEmbed,
											updatedAt: node_obj.updatedAt,
											createdAt: node_obj.createdAt,
										});
										if (record_upd.id) {
											let pubRec = await run(record_upd.id);

										}

										// console.log(record_upd)
										// return check1[0].url;
										moiLoop.next()

									} catch (error) {
										console.log(`error at update record ${error}`)
									}


								}



							});
						});
					} else {
						console.log("no data " + mo_result[m_oi].menu_order)
						moiLoop.next()
					}
					// console.log(rec_result.length)
					// if (rec_result != "") {
					// 	var post_all_data = await postAllData(rec_result)
					// 	// console.log(post_all_data)
					// }
					// console.log(post_all_data+"  post_all_data")
				});



			})

			// for (m = 0; m < result.length; m++) {
			// 	// console.log(result[m].menu_order + "menu order");
			// 	// console.log(result[m].menu_order);
			// 	con.query(`SELECT * FROM ishaMaha.wp_posts INNER JOIN ishaMaha.wp_yoast_indexable ON wp_posts.ID=wp_yoast_indexable.object_id where wp_posts.menu_order!=0 AND wp_posts.menu_order=${result[m].menu_order} AND wp_posts.post_type='page' AND wp_posts.post_excerpt!='' AND wp_posts.post_status='publish' AND (wp_posts.post_parent=253 OR wp_posts.post_parent=2633 OR wp_posts.post_parent=1716 OR wp_posts.post_parent=7966 OR wp_posts.post_parent=6814 OR wp_posts.post_parent=9040 OR wp_posts.post_parent=28567)`,
			// 		function (err, resByMenuOrder, fields) {
			// 			if (err) throw err;
			// 			// console.log(resByMenuOrder.length)
			// 			if (resByMenuOrder != "") {
			// 				var post_all_data = await postAllData(resByMenuOrder)
			// 				// console.log(post_all_data)
			// 			}
			// 			// console.log(post_all_data+"  post_all_data")
			// 		});
			// }
		});
	});

	if (!Data) {
		return res.status(404).json({
			status: 404,
			message: "could not find result",
		});
	}
	res.status(200).json({
		message: "Result Fetched",
		data: Data,

	});
});


async function getDataOfdatoCms(search) {

	const datoCmsRecords = await client.items.all({
		filter: {
			itemType: "1637301",

		}
	},
		{ allPages: true },

	);

	return datoCmsRecords.filter(function (obj) {
		// console.log(obj.filename)
		// console.log(obj.order)
		// console.log(obj.filename === search)

		if (obj.order === search) {
			return true;
		}
		return false;
	});


	// return datoCmsRecords;
	// console.log(datoCmsRecords[0])
}
// getDataOfdatoCms();




var chekExistOrNot = async function (search) {
	// var listOfObjecs = await client.uploads.all();

	const listOfObjecs = await client.uploads.all({
		filter: {
		}
	},
		{ allPages: true },
	);

	console.log(listOfObjecs.length)

	return listOfObjecs.filter(function (obj) {
		// console.log(obj.filename)
		// console.log(obj.filename + "===" + search)
		// console.log(obj.filename === search)
		// console.log(obj.filename +" === "+ search)
		if (obj.filename === search) {
			return true;
		}
		return false;
	});
}

async function getAllImage() {
	var listOfObjecs = [
		"https://isha.sadhguru.org/mahashivratri/wp-content/uploads/2017/01/Adiyogi-header.jpg",
		"https://images.sadhguru.org/mahashivratri/wp-content/uploads/2017/01/e-Adiyogi_Header-updated2.jpg",
		"https://isha.sadhguru.org/mahashivratri/wp-content/uploads/2017/01/Adiyogi-header.jpg",
		"https://images.sadhguru.org/mahashivratri/wp-content/uploads/2021/02/Shiva_Destroyer.jpg",
		"https://images.sadhguru.org/mahashivratri/wp-content/uploads/2021/02/Shiva_Destroyer.jpg",
		"https://isha.sadhguru.org/mahashivratri/wp-content/uploads/2020/01/Adiyogi-header.jpg"
	];
	for (var i = 0; i < listOfObjecs.length; i++) {
		// console.log(listOfObjecs[i])
		var imgD = await uploadImgA(listOfObjecs[i])
		// console.log(imgD)
	}
	// var imgD = await uploadImgA()
}
// getAllImage()

// uploadImg()
async function uploadImg(img) {
	// console.log(img + "----------------------img>>>>>")
	try {
		// var img = "https://images.sadhguru.org/mahashivratri/wp-content/uploads/2019/02/Guru-Purnima_-When-the-First-Guru-was-Born-_-Sadhguru.jpg"
		let splitImg = await img.split('/').pop();
		let mainImg = await splitImg.toLowerCase().replace("-_-", "-");
		console.log(mainImg)
		var check1 = await chekExistOrNot(mainImg);
		console.log(check1.length)
		if (check1.length === 0) {
			const path = await client.createUploadPath(
				img,
			);

			const upload = await client.uploads.create({
				path,
				author: "New author!",
				copyright: "New copyright",
				defaultFieldMetadata: {
					en: {
						alt: "New default alt",
						title: "New default title",
						focalPoint: {
							x: 0.3,
							y: 0.6,
						},
						customData: {
							watermark: true,
						},
					},
				},
			});
			return upload.url;
		} else {
			return check1[0].url;

		}


	} catch (error) {
		console.log(`this is eeror at upload img-->` + error)
	}


}

async function uploadFeatureImg(img)  {
	try {
		var name = "Name 5";
		// var img = "https://images.sadhguru.org/mahashivratri/wp-content/uploads/2020/01/Adiyogi-header.jpg"
		let splitImg = await img.split('/').pop();
		let mainImg = await splitImg.toLowerCase().replace("-_-", "-");
		// .replace(/_./g, ".").replace(/_-/g, "-")
		var check1 = await chekExistOrNot(mainImg);
		if (check1.length === 0) {3
			const path = await client.createUploadPath(
				img,
			);

			const upload = await client.uploads.create({
				path,
				author: "New author!",
				copyright: "New copyright",
				defaultFieldMetadata: {
					en: {
						alt: "New default alt",
						title: "New default title",
						focalPoint: {
							x: 0.3,
							y: 0.6,
						},
						customData: {
							watermark: true,
						},
					},
				},
			});
			return upload.id;
		} else {
			// console.log("already exist featureImage")
			return check1[0].id;    // already exist image can return this id

		}
	} catch (error) {
		console.log(`this is eeror at-->` + error)
	}


}

async function contentType(title, description, post_content) {				// this function return the article type
	var type;
	if (title != null && description != null) {
		type = "Article";
	} else if (title == null && description == null && post_content.includes("www.youtube.com")) {
		type = "Video";
	} else {
		type = "Poem";
	}
	return type;
}

async function postParent(p_id) {   //this function returns the post parent
	var p_type;
	if (p_id == '253' || p_id == '1716' || p_id == '2633' || p_id == '9040' || p_id == '28567') {
		p_type = ['104966902'];
	} else {
		p_type = ['104966902'];

	}
	return p_type;
}




async function postAllData(resByMenuOrder) {
	try {
		let get_data_obj = await getDataObjcts(resByMenuOrder)
		console.log(get_data_obj);
		if (Object.keys(get_data_obj).length > 0) {
			const record = await client.items.create(get_data_obj);
			if (record.id) {
				let pubRec = await run(record.id);
				return record;
			}

		}

	} catch (error) {
		console.log(`this error at postAllData function--> ${error}`)
	}
}


// To publish the recordrd by id
async function run(itemId) {
	const av = new SiteClient('7245267823d1bf87795f5505eeeb4c');
	const item = await av.items.publish(itemId, {
		recursive: 'true'
	});

	// console.log(item);
}

async function getData() {
	const recGet = await client.items.all({
		filter: {
			// IDs: "1637301", // you can use models `api_key`s or models IDs
			// title:"fff",
			itemType: "1664512",
		},
	}, { allPages: true });
	// console.log(recGet[1])

}

// getData()



function sleep(ms) {
	return new Promise((resolve) => {
		request({
			url: "https://jsonplaceholder.typicode.com/todos/1",
			json: true
		}, (err, res, body) => {
			resolve(JSON.stringify(body))
		})
	});
}

function sleep2() {
	return new Promise((resolve) => {
		request({
			url: "https://jsonplaceholder.typicode.com/todos/1",
			json: true
		}, (err, res, body) => {
			resolve(JSON.stringify(body))
		})
	});
}
function sleep3() {
	console.log("sleep3")
}
