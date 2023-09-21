"use client";
import React from "react";

import {Progress} from "@nextui-org/react";

export default function Score({ score }:{score:number}) {
  return (
    <Progress
        label="Positivity Score"
        size="sm"
        value={score}
        color={score>50?"success":score>20?"warning":"danger"}
        showValueLabel={true}
        className="dark:text-white border-t pt-4"
    />
  );
}
