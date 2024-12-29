/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

console.log("4.ts");
interface PageProps {
  title: string;
}


class Component<T> {
  constructor(public props: T) {}
}


class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// usage
const myPage = new Page({ title: "Moja Strona" });
myPage.pageInfo(); // Output: Moja Strona

export {};

console.log("______________________________________");
