import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Dc28Bu3O.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>El programador pragmático es uno de esos raros casos de libros técnicos que se leen, se releen y se vuelven a leer durante años. Tanto si es nuevo en el campo como si es un profesional experimentado, acabará encontrando ideas nuevas cada vez.</p>\n<p>Dave Thomas y Andy Hunt escribieron la primera edición de este libro tan influyente en 1999 para ayudar a sus clientes a crear software mejor y a redescubrir el placer de escribir código. Estas lecciones han ayudado a una generación de programadores a examinar la propia esencia del desarrollo de software, independientemente de cualquier lenguaje, framework o metodología en particular, y la filosofía pragmática ha sido el germen de cientos de libros, screencasts y audiolibros, además de miles de carreras e historias de éxito.</p>";

				const frontmatter = {"title":"Programador Pragmatico","author":"Marco de Paula","img":"programador-pragmatico.jpg","readtime":344,"description":"Un libro clásico para mejorar en programación","buy":{"spain":"https://amzn.to/3BaK8WQ","usa":"https://www.amazon.com/-/es/Andrew-Hunt/dp/020161622X"}};
				const file = "C:/Users/eduol/Downloads/awesome-aperture/src/content/books/programador-pragmatico.md";
				const url = undefined;
				function rawContent() {
					return "\nEl programador pragmático es uno de esos raros casos de libros técnicos que se leen, se releen y se vuelven a leer durante años. Tanto si es nuevo en el campo como si es un profesional experimentado, acabará encontrando ideas nuevas cada vez.\n\nDave Thomas y Andy Hunt escribieron la primera edición de este libro tan influyente en 1999 para ayudar a sus clientes a crear software mejor y a redescubrir el placer de escribir código. Estas lecciones han ayudado a una generación de programadores a examinar la propia esencia del desarrollo de software, independientemente de cualquier lenguaje, framework o metodología en particular, y la filosofía pragmática ha sido el germen de cientos de libros, screencasts y audiolibros, además de miles de carreras e historias de éxito.";
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
