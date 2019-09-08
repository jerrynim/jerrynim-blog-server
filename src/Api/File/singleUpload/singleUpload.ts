export default {
  Mutation: {
    singleUpload: async (obj, file): Promise<string> => {
      console.log(file);

      return "returnFile";
    }
  }
};
