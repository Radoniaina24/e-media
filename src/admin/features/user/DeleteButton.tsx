"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import Delete from "./svg/delete";
import { Button } from "flowbite-react";
import { useSnackbar } from "@/lib/context/SnackbarContext";
import { useDeleteUserMutation } from "@/lib/api/userApi";

export default function DeleteButton({ id }: { id: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteUser, responsedelete] = useDeleteUserMutation();
  const { showSnackbar } = useSnackbar();

  async function handleDelete(id: string) {
    try {
      await deleteUser(id).unwrap();
      showSnackbar("The user was successfully deleted");
      setOpen(false);
    } catch (error) {
      showSnackbar(error.data.message, "error");
      setOpen(false);
    }
  }
  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <Delete />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-56 text-center">
          <div className="mx-auto my-4 w-70">
            <h3 className="text-lg font-bold text-gray-800">
              Confirm Deletion
            </h3>
            <p className="mt-2 font-medium text-gray-500">
              Are you sure you want to delete this user?
            </p>
          </div>
          <div className="mt-5 flex justify-center gap-5">
            <Button
              size="sm"
              className="bg-danger"
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
            <Button
              size="sm"
              className="bg-warning"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
