import React from 'react'
import AddOperationForm from '../components/AddOperationForm';
import { useParams, Navigate } from "react-router-dom";
import { parseOperationType } from '../misc/parser';

type RouteParams = {
  operationId?: string;
};

const AddOperationPage: React.FC = () => {
  const {operationId} = useParams<RouteParams>();
  const operationType = parseOperationType(operationId);
    
  if (!operationType) {
    return <Navigate to="/" replace />;
  }

  return <AddOperationForm type={operationType} />;
}; 

export default AddOperationPage;