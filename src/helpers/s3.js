import S3 from 'react-aws-s3';
import { insert } from "helpers";

const { REACT_APP_S3_BUCKET_NAME, REACT_APP_S3_REGION, REACT_APP_S3_ACCESS_KEY, REACT_APP_S3_SECRET_KEY,
	REACT_APP_S3_URL } = process.env;



export const s3Upload = async (images = [], Key = 'event_gallery/', eventId, senderId) => {
	const config = {
		bucketName: REACT_APP_S3_BUCKET_NAME,
		dirName: Key,
		region: REACT_APP_S3_REGION,
		accessKeyId: REACT_APP_S3_ACCESS_KEY,
		secretAccessKey: REACT_APP_S3_SECRET_KEY,
		// s3Url: 'https:/your-custom-s3-url.com/'
	}
	const ReactS3Client = new S3(config);
	try {
		const s3Res = await Promise.all(images.map(async image => {
			let type = image.type ? image.type.split('/')[0] === "image" ? "image" : "video" : 'image';
			const path = await ReactS3Client.uploadFile(image, new Date().getTime());
			await insert('event_gallery', { path:path.location, type, eventId, senderId });
			console.log("path path path", path)
		}));
		console.log("s3Res s3Res ", s3Res, images)
		return s3Res;
	} catch (error) {
		console.log(" s3 image upload catch error ", error);
	}
}
