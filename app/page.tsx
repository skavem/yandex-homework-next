import styles from "./page.module.css";
import Card from "./components/Card/Card";
import Text from "./components/Text/Text";
import Filters from "./Filters";
import FilteredFilms from "./Films/FilmsFilters/FilmsFilters";

export default function Home() {
  return (
    <div className={styles["page-layout"]}>
      <Card className={styles["filters-card"]}>
        <Text element="h2" className={styles["filters-card__title"]}>
          Фильтр поиска
        </Text>
        <Filters />
      </Card>
      <FilteredFilms />
    </div>
  );
}
