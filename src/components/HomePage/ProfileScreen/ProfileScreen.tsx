import React, { useState } from "react";
import "./profile.css";
import sortUp from "./../../../images/filter/sortUp.png";
import sortDown from "./../../../images/filter/sortDown.png";
import styled from "styled-components";
import Products from "./Products";

const Div = styled.div`
 height:98vh;
 width:80%;
 margin: 2vh auto;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 25px;
  letter-spacing: 2px;
  color: rgb(66, 67, 68);
  padding: 15px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgb(66, 67, 68);
  padding: 5px;
  letter-spacing:1.1px;
`;
const InputField = styled.input`
  margin:10px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  width: 250px;
`;
const FilterBlock = styled.div`
  display: flex;
  flex-diraction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
const ProfileScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sorting, setSorting] = useState("");

  const searchingProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

 
  return (
    <Div>
      <Title> NEW ARRIVALS: SHOES, CLOTHING & MORE</Title>
      <Text>
        Add some fresh energy to your collection with our new releases.
      </Text>
      <Text>
        Look for the latest sneakers that you can
        wear all year long while you’re training or chilling.
      </Text>
      <FilterBlock>
          <InputField
            type="text"
            value={searchValue}
            placeholder="Search"
            onChange={searchingProduct}
          />
        <img
          src={sortUp}
          onClick={() => setSorting("price")}
          className={sorting !== "-price" ? "passive" : "actived"}
          height={25} alt = "sort"
        />
        <img
          src={sortDown}
          onClick={() => setSorting("-price")}
          className={sorting === "-price" ? "passive" : "actived"}
          height={25} alt = "sort"
        />
      </FilterBlock>
      <Products searchValue={searchValue} sorting={sorting} />
    </Div>
  );
};

export default ProfileScreen;
