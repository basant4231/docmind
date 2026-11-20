import mongoose, { Schema, Document, Model, Types } from 'mongoose';

export type DocumentStatus = 'uploading' | 'processing' | 'ready' | 'failed';

export interface IDocument extends Document {
  title: string;
  fileUrl: string;
  status: DocumentStatus;
  userId: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const DocumentSchema = new Schema<IDocument>(
  {
    title: {
      type: String,
      required: [true, 'Document title is required'],
      trim: true,
    },
    fileUrl: {
      type: String,
      required: [true, 'File URL is required'],
    },
    status: {
      type: String,
      enum: ['uploading', 'processing', 'ready', 'failed'],
      default: 'uploading',
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true, // Speeds up fetching all docs for a user
    },
  },
  { timestamps: true }
);

export const DocModel: Model<IDocument> =
  mongoose.models.Document ||
  mongoose.model<IDocument>('Document', DocumentSchema);
