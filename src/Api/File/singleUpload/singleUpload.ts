import uuid from "uuid/v1";
import aws from "aws-sdk";

export default {
  Mutation: {
    singleUpload: async (obj, { file }): Promise<string> => {
      const { filename, mimetype, createReadStream, encoding } = await file;
      const s3 = new aws.S3({
        accessKeyId: process.env.ACCESSKEYID,
        secretAccessKey: process.env.SECRET_ACCESSKEYID
      });
      const key = uuid() + "-" + file.name;
      const stream = createReadStream();
      const response = await s3
        .upload({
          Bucket: "jerrynim-blog",
          Key: key,
          ACL: "public-read",
          Body: stream
        })
        .promise()
        .catch();
      const url = response.Location;

      return "returnFile";
    }
  }
};
