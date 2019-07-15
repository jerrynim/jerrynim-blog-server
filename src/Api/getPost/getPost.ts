import Photon from "@generated/photon";
const photon = new Photon();

export default {
  Query: {
    Hello: async () => {
      // Open connection to database
      await photon.connect();

      const newPost = await photon.posts.create({
        data: {
          title: "title"
        }
      });
      console.log(newPost);
      await photon.disconnect();

      return "hello";
    }
  }
};
