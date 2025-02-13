import Buffer from "./Buffer";

class FileCompress {
    compressFile(file: Buffer): Buffer {
        return new Buffer(file.slice(0, file.length / 2));
    }
}

class CloudUpload {
  uploadFile(file: Buffer, destination: string): void {
    console.log("send to...", destination);
  }
}


class FileUploadService {
  constructor(private compressor: FileCompress, private upload: CloudUpload){}

  uploadFile(file: Buffer, destination: string): void {
    const compressedFile = this.compressor.compressFile(file);
    this.upload.uploadFile(compressedFile, destination);
  }

}