import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export function InfoCard({ icon: Icon, title, description, index = 0 }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -8 }}
    >
      <Card className="h-full rounded-xl py-0 hover:shadow-xl transition-shadow">
        <CardHeader className="h-40 rounded-xl bg-gray-50 flex items-center justify-center border-b">
          <Icon className="w-12 h-12 text-gray-500" />
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="text-xl font-medium text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}