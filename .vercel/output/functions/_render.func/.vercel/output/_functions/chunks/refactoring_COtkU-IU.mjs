import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Dc28Bu3O.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Martin Fowler’s guide to reworking bad code into well-structured code</p>\n<p>Refactoring improves the design of existing code and enhances software maintainability, as well as making existing code easier to understand. Original Agile Manifesto signer and software development thought leader, Martin Fowler, provides a catalog of refactorings that explains why you should refactor; how to recognize code that needs refactoring; and how to actually do it successfully, no matter what language you use.</p>";

				const frontmatter = {"title":"Refactoring","author":"Martin Fowler","img":"refactoring.jpg","readtime":355,"description":"Buenas prácticas para refactorizar código","buy":{"spain":"https://amzn.to/3XLYZ2H","usa":"https://www.amazon.com/-/es/Martin-Fowler/dp/0321336380"}};
				const file = "C:/Users/eduol/Downloads/awesome-aperture/src/content/books/refactoring.md";
				const url = undefined;
				function rawContent() {
					return "\nMartin Fowler’s guide to reworking bad code into well-structured code\n\nRefactoring improves the design of existing code and enhances software maintainability, as well as making existing code easier to understand. Original Agile Manifesto signer and software development thought leader, Martin Fowler, provides a catalog of refactorings that explains why you should refactor; how to recognize code that needs refactoring; and how to actually do it successfully, no matter what language you use.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
