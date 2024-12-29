/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
// Definicja interfejsu PageProps
console.log("4.ts");
// Generyczna klasa Component
class Component {
    constructor(props) {
        this.props = props;
    }
}
// Klasa Page dziedzicząca po Component z PageProps
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
// Przykładowe użycie
const myPage = new Page({ title: "Moja Strona" });
myPage.pageInfo(); // Output: Moja Strona
console.log("______________________________________");
export {};
//# sourceMappingURL=4.js.map