import { getReceipts, getReceiptsPages } from "@/app/lib/data";
import { List, ListCard, ListId, ListName, ListInfo, ListInfoDetail, ListDetail, ListDate } from "@/app/ui/lists/lists";
import { Pagination } from "@/app/ui/lists/pagination";
import EmptyList from "@/app/ui/lists/EmptyList";
import { ReceiptListTotal } from "./ListTotal";

export default async function Receipts({ query, currentPage }) {
  const data = await getReceipts(query, currentPage);
  const totalPages = await getReceiptsPages(query);

  if (data.length === 0) return <EmptyList query={query}/>

  return (
    <List>
      {data.map(register => (
        <ListCard
          key={register.Id_venta}
          href={`/receipts/${register.Id_venta}/edit`}
        >
          <ListId id={register.Id_venta}/>
          <ListInfo>
            <ListName name={register.NombreCompleto} />
              <ListInfoDetail>
                <ListDate date={register.Fecha} />
                <ListDetail detail={register.Id_pedido} color="bg-neutral-200/60 dark:bg-neutral-700 text-center" />
                <ListDetail detail={register.Abono} color="bg-green-200 dark:bg-green-900 text-right" type="number" />
              </ListInfoDetail>
          </ListInfo>
        </ListCard>
      ))}
      <ReceiptListTotal data={data} />
      <Pagination totalPages={totalPages} />
    </List>
  );
}