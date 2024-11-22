import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Dc28Bu3O.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>TypeScript has conquered the world of JavaScript: it is one of the world’s fastest growing and most popular languages across developer surveys, widely used in consumer and business companies alike, and frequently credited for helping massive web applications scale. But what is TypeScript?</p>\n<p>How does it work, why does it work, and how can we use it? Learning TypeScript takes beginner to intermediate JavaScript programmers from knowing nothing about “types” or a “type system” to full mastery of the fundamentals of TypeScript. It’s more than a means to find bugs and typos—it’s a useful system for declaring the way our JavaScript should work and helping us stick to it.</p>\n<p>You’ll learn how TypeScript: interacts with JavaScript analyzes and understands code augments your existing development pattern helps you document your code works with IDEs to provide refactoring tools assists local development in refactoring code helps you develop more quickly with fewer bugs</p>";

				const frontmatter = {"title":"Learning TypeScript","author":"Josh Goldberg","img":"learning-typescript.jpg","readtime":301,"description":"Domina TypeScript de 0 a experto","buy":{"spain":"https://amzn.to/3zlkdes","usa":"https://www.amazon.com/-/es/Josh-Goldberg/dp/1098110331"}};
				const file = "C:/Users/eduol/Downloads/awesome-aperture/src/content/books/learning-typescript.md";
				const url = undefined;
				function rawContent() {
					return "\nTypeScript has conquered the world of JavaScript: it is one of the world's fastest growing and most popular languages across developer surveys, widely used in consumer and business companies alike, and frequently credited for helping massive web applications scale. But what is TypeScript?\n\nHow does it work, why does it work, and how can we use it? Learning TypeScript takes beginner to intermediate JavaScript programmers from knowing nothing about \"types\" or a \"type system\" to full mastery of the fundamentals of TypeScript. It's more than a means to find bugs and typos--it's a useful system for declaring the way our JavaScript should work and helping us stick to it.\n\nYou'll learn how TypeScript: interacts with JavaScript analyzes and understands code augments your existing development pattern helps you document your code works with IDEs to provide refactoring tools assists local development in refactoring code helps you develop more quickly with fewer bugs";
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
