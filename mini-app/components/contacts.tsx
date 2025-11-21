"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function Contacts() {
  type Contact = { id: number; name: string; phone: string };
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    if (!name.trim() || !phone.trim()) return;
    const newContact: Contact = {
      id: Date.now(),
      name: name.trim(),
      phone: phone.trim(),
    };
    setContacts((prev) => [...prev, newContact]);
    setName("");
    setPhone("");
  };

  const deleteContact = (id: number) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Contacts</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button onClick={addContact}>Add</Button>
        </div>
        <ul className="space-y-1">
          {contacts.map((c) => (
            <li key={c.id} className="flex justify-between items-center">
              <span>{c.name} ({c.phone})</span>
              <Button variant="outline" size="sm" onClick={() => deleteContact(c.id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
