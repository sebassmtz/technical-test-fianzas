"use client";

import { useEffect, useState } from "react";
import React from "react";
import { useMountedModal } from "@/hooks/use-mounted-modal";
import EditProductModal from "@/components/modal/edit-product-modal";
import AddProductModal from "@/components/modal/add-product-modal";

export const ModalProviders = () => {
  const { isMounted, setIsMounted } = useMountedModal((state) => ({
    isMounted: state.isMounted,
    setIsMounted: state.setIsMounted,
  }));
  useEffect(() => {
    setIsMounted();
  }, [setIsMounted]);

  if (!setIsMounted) return null;

  return (
    <>
      <EditProductModal />
      <AddProductModal />
    </>
  );
};
