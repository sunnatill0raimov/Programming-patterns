import Document from './document';
import DocumentFactory from './documentFactory';

function main() {
	const original = new Document(1, "Template Document", "Template Content", "Author Admin", ["template", "official"]);
	console.log("Original Document (dastlabki):", original.toString());
	
	const factory = new DocumentFactory(original);

	const clone1 = factory.cloneDocument();
	const clone2 = factory.cloneDocument();

	clone1.setId(2);
	clone1.setTitle("Staff table");
	clone1.setContent("Staff table content");
	clone1.setAuthor("Sunnatillo Raimov");
	clone1.setTags(["staff", "hr"]);
	clone1.addTag("confidential");

	clone2.setId(3);
	clone2.setTitle("Ban message");
	clone2.setContent("You are banned from this server");
	clone2.setAuthor("Admin");
	clone2.setTags(["ban", "moderation"]);

	console.log("\n--- O'zgartirishlardan keyin ---");
	console.log("Original Document:", original.toString());
	console.log("Staff table (clone1):", clone1.toString());
	console.log("Ban message (clone2):", clone2.toString());

	console.log("\n--- Taqqoslash (Obyekt va Massiv referencelari mustaqilligi) ---");
	console.log("original === clone1:", original === clone1);
	console.log("clone1 === clone2:", clone1 === clone2);
	console.log("original.tags === clone1.tags (Deep Copy):", original.getTags() === clone1.getTags());
}

main();