import {
  AttesterDisabled as AttesterDisabledEvent,
  AttesterEnabled as AttesterEnabledEvent,
  AttesterManagerUpdated as AttesterManagerUpdatedEvent,
  MaxMessageBodySizeUpdated as MaxMessageBodySizeUpdatedEvent,
  MessageReceived as MessageReceivedEvent,
  MessageSent as MessageSentEvent,
  OwnershipTransferStarted as OwnershipTransferStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Pause as PauseEvent,
  PauserChanged as PauserChangedEvent,
  RescuerChanged as RescuerChangedEvent,
  SignatureThresholdUpdated as SignatureThresholdUpdatedEvent,
  Unpause as UnpauseEvent
} from "../generated/MessageTransmitter/MessageTransmitter"
import {
  AttesterDisabled,
  AttesterEnabled,
  AttesterManagerUpdated,
  MaxMessageBodySizeUpdated,
  MessageReceived,
  MessageSent,
  OwnershipTransferStarted,
  OwnershipTransferred,
  Pause,
  PauserChanged,
  RescuerChanged,
  SignatureThresholdUpdated,
  Unpause
} from "../generated/schema"

export function handleAttesterDisabled(event: AttesterDisabledEvent): void {
  let entity = new AttesterDisabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.attester = event.params.attester

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAttesterEnabled(event: AttesterEnabledEvent): void {
  let entity = new AttesterEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.attester = event.params.attester

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAttesterManagerUpdated(
  event: AttesterManagerUpdatedEvent
): void {
  let entity = new AttesterManagerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousAttesterManager = event.params.previousAttesterManager
  entity.newAttesterManager = event.params.newAttesterManager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxMessageBodySizeUpdated(
  event: MaxMessageBodySizeUpdatedEvent
): void {
  let entity = new MaxMessageBodySizeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newMaxMessageBodySize = event.params.newMaxMessageBodySize

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageReceived(event: MessageReceivedEvent): void {
  let entity = new MessageReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.sourceDomain = event.params.sourceDomain
  entity.nonce = event.params.nonce
  entity.sender = event.params.sender
  entity.messageBody = event.params.messageBody

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageSent(event: MessageSentEvent): void {
  let entity = new MessageSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.message = event.params.message

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferStarted(
  event: OwnershipTransferStartedEvent
): void {
  let entity = new OwnershipTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePause(event: PauseEvent): void {
  let entity = new Pause(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePauserChanged(event: PauserChangedEvent): void {
  let entity = new PauserChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAddress = event.params.newAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRescuerChanged(event: RescuerChangedEvent): void {
  let entity = new RescuerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newRescuer = event.params.newRescuer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignatureThresholdUpdated(
  event: SignatureThresholdUpdatedEvent
): void {
  let entity = new SignatureThresholdUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldSignatureThreshold = event.params.oldSignatureThreshold
  entity.newSignatureThreshold = event.params.newSignatureThreshold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpause(event: UnpauseEvent): void {
  let entity = new Unpause(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
