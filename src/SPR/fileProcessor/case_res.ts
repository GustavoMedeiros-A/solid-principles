// Já to fazendo dependency Inversion meu fi

interface Reader {
    read(file: string): any[];
}

interface Export {
    export(data: any[]): string;
}

class CsvReader implements Reader {
    read(file: string): any[] {
        console.log(`Lendo arquivo CSV: ${file}`);
        return [{ name: "Alice", value: 100 }];
    }
}

class JSONExport implements Export {
    export(data: any[]): string {
        const jsonReport = JSON.stringify(data);
        console.log(`Exportando relatório em JSON: ${jsonReport}`);
        return jsonReport;
      }
}


class ReportService {
    constructor(private reader: Reader, private exporter: Export){}

    processFileAndExport(file: string) {
        const data = this.reader.read(file);
        this.exporter.export(data);
    }

}

// Uso
const csvReader = new CsvReader();
const jsonExporter = new JSONExport();
const reportService = new ReportService(csvReader, jsonExporter);
reportService.processFileAndExport("example.csv");

// Output: