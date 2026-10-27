export class Computer {
	public cpu: string = "";
	public ram: string = "";
	public storage: string = "";
	public gpu?: string;
	public powerSupply?: string;

	public toString(): string {
		return `Computer [CPU=${this.cpu}, RAM=${this.ram}, Storage=${this.storage}, GPU=${this.gpu ?? "Mavjud emas (Integrated)"}, PSU=${this.powerSupply ?? "Standart 400W"}]`;
	}
}

export class ComputerBuilder {
	private computer: Computer;

	constructor() {
		this.computer = new Computer();
	}

	public reset(): this {
		this.computer = new Computer();
		return this;
	}

	public setCPU(cpu: string): this {
		this.computer.cpu = cpu;
		return this;
	}

	public setRAM(ram: string): this {
		this.computer.ram = ram;
		return this;
	}

	public setStorage(storage: string): this {
		this.computer.storage = storage;
		return this;
	}

	public setGPU(gpu: string): this {
		this.computer.gpu = gpu;
		return this;
	}

	public setPowerSupply(powerSupply: string): this {
		this.computer.powerSupply = powerSupply;
		return this;
	}

	public build(): Computer {
		const product = this.computer;
		this.reset();
		return product;
	}
}

export class ComputerDirector {
	public buildGamingPC(builder: ComputerBuilder): Computer {
		return builder
			.reset()
			.setCPU("Intel Core i9-14900K")
			.setRAM("32GB DDR5")
			.setStorage("2TB NVMe SSD")
			.setGPU("NVIDIA GeForce RTX 4090")
			.setPowerSupply("850W Gold")
			.build();
	}

	public buildOfficePC(builder: ComputerBuilder): Computer {
		return builder
			.reset()
			.setCPU("Intel Core i3-12100")
			.setRAM("8GB DDR4")
			.setStorage("512GB SSD")
			.setPowerSupply("450W")
			.build();
	}
}

// ==========================================
// 4. MAIN (Ishga tushirish)
// ==========================================
function main(): void {
	const builder = new ComputerBuilder();
	const director = new ComputerDirector();

	// 1. Director orqali tayyor Gaming PC yig'ish:
	const gamingPC = director.buildGamingPC(builder);
	console.log("1. Gaming PC:");
	console.log(gamingPC.toString());

	// 2. Director orqali tayyor Office PC yig'ish:
	const officePC = director.buildOfficePC(builder);
	console.log("\n2. Office PC:");
	console.log(officePC.toString());

	// 3. Directordan foydalanmasdan, o'zimiz xohlagan maxsus (Custom) PC yig'ish:
	const customPC = builder
		.setCPU("AMD Ryzen 7 7800X3D")
		.setRAM("64GB DDR5")
		.setStorage("4TB NVMe SSD")
		.setGPU("NVIDIA RTX 4080 Super")
		.setPowerSupply("1000W Platinum")
		.build();

	console.log("\n3. Custom (Maxsus) PC:");
	console.log(customPC.toString());
}

main();
