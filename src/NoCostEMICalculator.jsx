import { useState } from 'react';
import styled from 'styled-components';
import './App.css'

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
`;

const NoCostEMICalculator = () => {
    const [price, setPrice] = useState('');
    const [tenure, setTenure] = useState('');
    const [processingFee, setProcessingFee] = useState('');
    const [emi, setEMI] = useState(null);

    const calculateEMI = () => {
        const totalPrice = parseFloat(price);
        const months = parseInt(tenure);
        const fee = parseFloat(processingFee) || 0;

        if (isNaN(totalPrice) || isNaN(months) || totalPrice <= 0 || months <= 0) {
            alert('Please enter valid inputs for price and tenure.');
            return;
        }

        const effectivePrice = totalPrice + fee;
        const monthlyEMI = effectivePrice / months;
        setEMI(monthlyEMI.toFixed(2));
    };

    return (
        <>
            <Container>
                <Title>No-Cost EMI Calculator</Title>
                <Label>Price of the Product (₹):</Label>
                <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter product price"
                />

                <Label>Tenure (Months):</Label>
                <Input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    placeholder="Enter tenure in months"
                />

                <Label>Processing Fee (₹) [Optional]:</Label>
                <Input
                    type="number"
                    value={processingFee}
                    onChange={(e) => setProcessingFee(e.target.value)}
                    placeholder="Enter processing fee"
                />

                <Button onClick={calculateEMI}>Calculate EMI</Button>

                {emi && (
                    <Result>
                        <h3>Monthly EMI: ₹{emi}</h3>
                    </Result>
                )}
            </Container>
        </>
    );
};

export default NoCostEMICalculator;
