import React, { useState, useEffect } from "react";
import { profileData } from "./ProfileData";
import Skeleton from "./Skeleton";
import styled from "styled-components";
import { sortBy } from "sort-by-typescript";
import CardItem from "./CardItem";

interface Props {
  searchValue: string;
  sorting: string;
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ListItem = styled.div`
  line-height: 1.5;
  align-items: center;
  font-size: 13px;
  padding: 10px;
  margin: 20px auto;
  letter-spacing:1.1px;
`;

const Products = ({ searchValue, sorting }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <List>
          {profileData
            .filter(
              (item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.discribtion
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
            )
            .sort(sortBy(sorting))
            .map((item) => (
              <ListItem key={item.id}>
                <CardItem {...item} />
              </ListItem>
            ))}
        </List>
      )}
    </div>
  );
};

export default Products;
