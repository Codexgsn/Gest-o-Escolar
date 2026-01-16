'use client';

import { NewReservationForm } from "@/components/reservations/new-reservation-form";

export default function NewReservationPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Criar Nova Reserva</h1>
      <NewReservationForm />
    </div>
  );
}
