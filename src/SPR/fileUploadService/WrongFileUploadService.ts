import Buffer from "./Buffer";

class WrongFileUploadService {
    uploadFile(file: Buffer, destination: string) {
        const compressFile = this.compressFile(file);

        console.log("send to...", destination);
    }

    private compressFile(file: Buffer): Buffer {
        return file.slice(0, file.length / 2);
    }
}