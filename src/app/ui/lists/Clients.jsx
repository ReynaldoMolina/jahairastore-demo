import { getClients, getClientsPages } from "@/app/lib/data";
import { Pagination } from "./pagination";
import { List, ListCard, ListId, ListName, ListInfo, ListInfoDetail, ListPhone } from "@/app/ui/lists/lists";
import EmptyList from "@/app/ui/lists/EmptyList";

export default async function Clients({ query, currentPage }) {
  const data = await getClients(query, currentPage);
  const totalPages = await getClientsPages(query);

  if (data.length === 0) return <EmptyList query={query} />

  return (
    <List>
      {data.map(register => (
        <ListCard
          key={register.Id_cliente}
          href={`/clients/${register.Id_cliente}/edit`}
        >
          <ListId id={register.Id_cliente}/>
          <ListInfo display="flex-row items-center">
            <ListName name={register.NombreCompleto} />
              <ListInfoDetail>
                <ListPhone phone={register.Telefono} />
              </ListInfoDetail>
          </ListInfo>
        </ListCard>
      ))}
      <Pagination totalPages={totalPages} />
    </List>
  );
}